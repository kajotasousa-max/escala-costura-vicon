/**
 * Escala da Costura — serviço opcional de envio automático do relatório por e-mail.
 *
 * Como instalar:
 * 1. Acesse script.google.com, crie um projeto e cole este arquivo.
 * 2. Troque TOKEN abaixo por uma senha sua.
 * 3. Implantar → Nova implantação → App da Web.
 *    Executar como: Eu · Quem pode acessar: Qualquer pessoa.
 * 4. Autorize, copie o URL que termina em /exec e cole no app
 *    (Ajustes → Relatório por e-mail), junto com o mesmo TOKEN.
 *
 * O e-mail sai da sua conta Google. Limite do Gmail gratuito: cerca de 100 destinatários por dia.
 */
const TOKEN = 'TROQUE-ESTA-SENHA';
const NOME_REMETENTE = 'Escala da Costura';

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    if (d.token !== TOKEN) return resposta_('token inválido');
    const to = String(d.to || '').split(/[,;\s]+/).filter(x => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(x));
    if (!to.length) return resposta_('sem destinatários');
    MailApp.sendEmail({
      to: to.join(','),
      subject: String(d.subject || 'Escala da costura').slice(0, 200),
      body: String(d.text || ''),
      htmlBody: String(d.html || ''),
      name: NOME_REMETENTE
    });
    registrar_(to.join(','), d.subject);
    return resposta_('ok');
  } catch (err) {
    return resposta_('erro: ' + err.message);
  }
}

// Abrir o URL /exec no navegador mostra se o serviço está no ar
function doGet() {
  return resposta_('Serviço de e-mail da Escala da Costura ativo. Cota restante hoje: ' + MailApp.getRemainingDailyQuota());
}

function resposta_(msg) {
  return ContentService.createTextOutput(msg).setMimeType(ContentService.MimeType.TEXT);
}

// Guarda um histórico simples dos envios nas propriedades do script (últimos 50)
function registrar_(para, assunto) {
  const p = PropertiesService.getScriptProperties();
  const log = JSON.parse(p.getProperty('log') || '[]');
  log.push([new Date().toISOString(), para, assunto]);
  p.setProperty('log', JSON.stringify(log.slice(-50)));
}
