using GestaoPatrimonios.Contexts;
using GestaoPatrimonios.Domains;
using GestaoPatrimonios.DTOs.PatrimonioDto;
using GestaoPatrimonios.Interfaces;

namespace GestaoPatrimonios.Repositories
{
    public class PatrimonioRepository : IPatrimonioRepository
    {
        private readonly GestaoPatrimoniosContext _context;

        public PatrimonioRepository(GestaoPatrimoniosContext context)
        {
            _context = context;
        }

        public List<ListarPatrimonioDto> Listar()
        {
            return _context.Patrimonio
                .Select(p => new ListarPatrimonioDto
                {
                    PatrimonioID = p.PatrimonioID,
                    Denominacao = p.Denominacao,
                    NumeroPatrimonio = p.NumeroPatrimonio,
                    Valor = p.Valor,
                    Imagem = p.Imagem,
                    LocalizacaoID = p.LocalizacaoID,
                    StatusPatrimonioID = p.StatusPatrimonioID,

                    DataTransferencia = _context.LogPatrimonio
                        .Where(l => l.PatrimonioID == p.PatrimonioID)
                        .OrderByDescending(l => l.DataTransferencia)
                        .Select(l => l.DataTransferencia)
                        .FirstOrDefault()
                })
                .OrderBy(p => p.Denominacao)
                .ToList();
        }

        public Patrimonio BuscarPorId(Guid patrimonioId)
        {
            return _context.Patrimonio.Find(patrimonioId);
        }

        public bool BuscarPorNumeroPatrimonio(string numeroPatrimonio)
        {
            return _context.Patrimonio.Any(patrimonio => patrimonio.NumeroPatrimonio == numeroPatrimonio);
        }

        public bool LocalizacaoExiste(Guid localizacaoId)
        {
            return _context.Localizacao.Any(localizacao => localizacao.LocalizacaoID == localizacaoId);
        }

        public bool StatusPatrimonioExiste(Guid statusPatrimonioId)
        {
            return _context.StatusPatrimonio.Any(status => status.StatusPatrimonioID == statusPatrimonioId);
        }

        public Localizacao BuscarLocalizacaoPorNome(string nomeLocalizacao)
        {
            return _context.Localizacao.FirstOrDefault(localizacao => localizacao.NomeLocal.ToLower() == nomeLocalizacao.ToLower());
        }

        public StatusPatrimonio BuscarStatusPatrimonioPorNome(string nomeStatus)
        {
            return _context.StatusPatrimonio.FirstOrDefault(status => status.NomeStatus.ToLower() == nomeStatus.ToLower());
        }

        public TipoAlteracao BuscarTipoAlteracaoPorNome(string nomeTipo)
        {
            return _context.TipoAlteracao.FirstOrDefault(tipo => tipo.NomeTipo.ToLower() == nomeTipo.ToLower());
        }

        public void Adicionar(Patrimonio patrimonio)
        {
            _context.Patrimonio.Add(patrimonio);
            _context.SaveChanges();
        }

        public void AtualizarStatus(Patrimonio patrimonio)
        {
            if (patrimonio == null)
            {
                return;
            }

            Patrimonio patrimonioBanco = _context.Patrimonio.Find(patrimonio.PatrimonioID);

            if (patrimonioBanco == null)
            {
                return;
            }

            patrimonioBanco.StatusPatrimonioID = patrimonio.StatusPatrimonioID;

            _context.SaveChanges();
        }

        public void AdicionarLog(LogPatrimonio logPatrimonio)
        {
            _context.LogPatrimonio.Add(logPatrimonio);
            _context.SaveChanges();
        }
    }
}
