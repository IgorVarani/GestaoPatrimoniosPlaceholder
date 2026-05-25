using System.Security.Cryptography;
using System.Text;
using GestaoPatrimonios.Applications.Autenticacao;
using GestaoPatrimonios.Applications.Regras;
using GestaoPatrimonios.Domains;
using GestaoPatrimonios.DTOs.AutenticacaoDto;
using GestaoPatrimonios.Exceptions;
using GestaoPatrimonios.Interfaces;

namespace GestaoPatrimonios.Applications.Services
{
    public class AutenticacaoService
    {
        private readonly IUsuarioRepository _repository;
        private readonly GeradorTokenJwt _tokenJwt;

        public AutenticacaoService(IUsuarioRepository repository, GeradorTokenJwt tokenJwt)
        {
            _repository = repository;
            _tokenJwt = tokenJwt;
        }

        // ✔ Hash MD5 compatível com VARBINARY no banco
        private static byte[] GerarHash(string senha)
        {
            using var md5 = MD5.Create();
            return md5.ComputeHash(Encoding.UTF8.GetBytes(senha));
        }

        // ✔ Comparação segura de byte[]
        private static bool VerificarSenha(string senhaDigitada, byte[] senhaHashBanco)
        {
            if (senhaHashBanco == null || senhaHashBanco.Length == 0)
                return false;

            var hashDigitado = GerarHash(senhaDigitada);

            return hashDigitado.SequenceEqual(senhaHashBanco);
        }

        public TokenDto Login(LoginDto loginDto)
        {
            Usuario usuario = _repository.ObterPorNIFComTipoUsuario(loginDto.NIF);

            if (usuario == null)
                throw new DomainException("NIF ou senha inválidos.");

            // ✔ CORREÇÃO do bool? Ativo
            if (usuario.Ativo != true)
                throw new DomainException("Usuário inativo.");

            if (!VerificarSenha(loginDto.Senha, usuario.Senha))
                throw new DomainException("NIF ou senha inválidos.");

            string token = _tokenJwt.GerarToken(usuario);

            return new TokenDto
            {
                Token = token,
                PrimeiroAcesso = usuario.PrimeiroAcesso,
                TipoUsuario = usuario.TipoUsuario.NomeTipo
            };
        }

        public void TrocarPrimeiraSenha(Guid usuarioId, TrocarPrimeiraSenhaDto dto)
        {
            Validar.ValidarSenha(dto.SenhaAtual);
            Validar.ValidarSenha(dto.NovaSenha);

            Usuario usuario = _repository.BuscarPorId(usuarioId);

            if (usuario == null)
                throw new DomainException("Usuário não encontrado");

            if (usuario.Ativo != true)
                throw new DomainException("Usuário inativo.");

            if (!VerificarSenha(dto.SenhaAtual, usuario.Senha))
                throw new DomainException("Senha atual inválida.");

            if (dto.SenhaAtual == dto.NovaSenha)
                throw new DomainException("A nova senha deve ser diferente da senha atual.");

            usuario.Senha = GerarHash(dto.NovaSenha);
            usuario.PrimeiroAcesso = false;

            _repository.AtualizarSenha(usuario);
            _repository.AtualizarPrimeiroAcesso(usuario);
        }
    }
}