import * as GetAboutDetailString from '../GetAboutDetailString/GetAboutDetailString.ts'
import * as GetAboutDetailStringWeb from '../GetAboutDetailStringWeb/GetAboutDetailStringWeb.ts'
import * as GetAboutVirtualDom from '../GetAboutVirtualDom/GetAboutVirtualDom.ts'
import * as Render from '../Render/Render.ts'

export const commandMap = {
  'About.getVirtualDom': GetAboutVirtualDom.getAboutVirtualDom,
  'About.getDetailStringWeb': GetAboutDetailStringWeb.getDetailStringWeb(),
  'About.getDetailString': GetAboutDetailString.getDetailString(),
  'About.render': Render.doRender,
}
