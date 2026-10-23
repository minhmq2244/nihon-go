// "Xuất PDF": opens a print-ready page; the browser's print dialog saves it as PDF.

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const textToHtml = (s: string) => esc(s).replace(/\n/g, '<br>')

export function printDocument(title: string, bodyHtml: string) {
  const w = window.open('', '_blank')
  if (!w) {
    alert('Trình duyệt đã chặn cửa sổ mới. Hãy cho phép pop-up để xuất PDF.')
    return
  }
  w.document.write(`<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>${esc(title)}</title>
<style>
  body{font-family:'Noto Sans JP','Yu Gothic UI',Meiryo,'Hiragino Sans',sans-serif;color:#111;line-height:1.8;margin:24px 32px;font-size:14px}
  h1{font-size:20px;margin:0 0 4px} h2{font-size:16px;margin:22px 0 6px;border-bottom:1px solid #ccc;padding-bottom:3px}
  .meta{color:#666;font-size:12px;margin-bottom:12px}
  .box{border:1px solid #ccc;border-radius:6px;padding:10px 12px;margin:6px 0;white-space:normal}
  .answer{background:#f6f6f6}
  table{border-collapse:collapse;width:100%;margin:6px 0} th,td{border:1px solid #ccc;padding:4px 8px;text-align:left;vertical-align:top}
  rt{font-size:.55em;color:#555} blockquote{margin:6px 0;padding:4px 10px;border-left:3px solid #999;background:#f6f6f6}
  code{background:#f0f0f0;padding:0 3px;border-radius:3px}
  @page{margin:16mm}
</style></head><body>
<h1>${esc(title)}</h1><div class="meta">Xuất từ Nihongo N5→N4 · ${new Date().toLocaleString('vi-VN')}</div>
${bodyHtml}
<script>window.onload=function(){setTimeout(function(){window.print()},300)}</script>
</body></html>`)
  w.document.close()
}
