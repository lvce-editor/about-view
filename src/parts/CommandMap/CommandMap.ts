import * as GetAboutDetailString from '../GetAboutDetailString/GetAboutDetailString.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as GetAboutVirtualDom from '../GetAboutVirtualDom/GetAboutVirtualDom.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render from '../Render/Render.ts'

export const commandMap = {
  'About.getDetailString': GetAboutDetailString.getDetailString,
  'About.getDetailStringWeb': GetAboutDetailStringWeb.getDetailStringWeb,
  'About.getVirtualDom': GetAboutVirtualDom.getAboutVirtualDom,
  'About.loadContent': LoadContent.loadContent,
  'About.render': Render.doRender,
}
