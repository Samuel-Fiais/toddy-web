import { OptionSelectCommon } from '../common/OptionSelectCommon'

export class FilterTableForm {
  column: OptionSelectCommon = new OptionSelectCommon()
  operation: OptionSelectCommon = new OptionSelectCommon()
  value: string = ''
}
