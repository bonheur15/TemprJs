import { helpers, nativeHelpers, filters, templates } from './containers'
import SqrlErr from './err'
import { copyProps } from './utils'

/* TYPES */

export type FetcherFunction = (container: 'H' | 'F', name: string) => Function | undefined
import { HelperFunction, FilterFunction } from './containers'
import { TemplateFunction } from './compile'
import { Cacher } from './storage'
// import { TagType } from './parse'

type trimConfig = 'nl' | 'slurp' | false

export interface SqrlConfig {
  varName: string
  autoTrim: trimConfig | [trimConfig, trimConfig]
  rmWhitespace?: boolean
  autoEscape: boolean
  defaultFilter: false | string
  tags: [string, string]
  l: FetcherFunction
  plugins: Array<{ processFnString?: Function; processAST?: Function }>
  async: boolean
  storage: {
    helpers: Cacher<HelperFunction>
    nativeHelpers: Cacher<Function>
    filters: Cacher<FilterFunction>
    templates: Cacher<TemplateFunction>
  }
  prefixes: {
    h: string
    b: string
    i: string
    r: string
    c: string
    e: string
    [index: string]: string
  }
  cache: boolean
  views?: string | Array<string>
  root?: string
  filename?: string
  name?: string
  'view cache'?: boolean
  useWith?: boolean
  [index: string]: any
}

export type PartialConfig = {
  [P in keyof SqrlConfig]?: SqrlConfig[P]
}

/* END TYPES */

var defaultConfig: SqrlConfig = {
  varName: 'it',
  autoTrim: [false, 'nl'],
  autoEscape: true,
  defaultFilter: false,
  tags: ['{{', '}}'],
  l: function (container: 'H' | 'F', name: string): HelperFunction | FilterFunction | undefined {
    if (container === 'H') {
      var hRet = this.storage.helpers.get(name) as HelperFunction | undefined
      if (hRet) {
        return hRet
      } else {
        throw SqrlErr("Can't find helper '" + name + "'")
      }
    } else if (container === 'F') {
      var fRet = this.storage.filters.get(name) as FilterFunction | undefined
      if (fRet) {
        return fRet
      } else {
        throw SqrlErr("Can't find filter '" + name + "'")
      }
    }
  },
  async: false,
  storage: {
    helpers: helpers,
    nativeHelpers: nativeHelpers,
    filters: filters,
    templates: templates
  },
  prefixes: {
    h: '@',
    b: '#',
    i: '',
    r: '*',
    c: '/',
    e: '!'
  },
  cache: false,
  plugins: [],
  useWith: false
}

defaultConfig.l.bind(defaultConfig)

function getConfig (override: PartialConfig, baseConfig?: SqrlConfig): SqrlConfig {
  // TODO: run more tests on this

  var res: PartialConfig = {} // Linked
  copyProps(res, defaultConfig) // Creates deep clone of res, 1 layer deep

  if (baseConfig) {
    copyProps(res, baseConfig)
  }

  if (override) {
    copyProps(res, override)
  }

  ;(res as SqrlConfig).l.bind(res)

  return res as SqrlConfig
}

export { defaultConfig, getConfig }
