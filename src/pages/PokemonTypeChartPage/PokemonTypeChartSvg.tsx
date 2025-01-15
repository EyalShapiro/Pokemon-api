import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export const PokemonTypeChartSvg = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={492}
    height={492}
    {...props}
  >
    <defs>
      <g id="d">
        <rect
          x={90}
          y={90}
          width={22}
          height={22}
          fill="#00aa00"
          stroke="#000000"
        />
        <switch>
          <text
            x={101}
            y={108}
            fontSize={19.6}
            textAnchor="middle"
            fill="#ffffff"
            fontFamily="DejaVu Sans, sans-serif"
            id="trsvg544"
          >
            <tspan id="trsvg1">{"2"}</tspan>
          </text>
        </switch>
      </g>
      <g id="e">
        <rect x={90} y={90} width={22} height={22} fill="#000000" />
        <switch>
          <text
            x={101}
            y={108}
            fontSize={19.6}
            textAnchor="middle"
            fill="#ffffff"
            fontFamily="DejaVu Sans, sans-serif"
            id="trsvg545"
          >
            <tspan id="trsvg2">{"0"}</tspan>
          </text>
        </switch>
      </g>
      <g id="f">
        <rect
          x={90}
          y={90}
          width={22}
          height={22}
          fill="#ff0000"
          stroke="#000000"
        />
        <switch>
          <text
            x={101}
            y={108}
            fontSize={19.6}
            textAnchor="middle"
            fontFamily="DejaVu Sans, sans-serif"
            id="trsvg546"
          >
            <tspan id="trsvg3">{"\xBD"}</tspan>
          </text>
        </switch>
      </g>
      <linearGradient
        id="b"
        y1={0}
        x1={90}
        y2={0}
        x2={465}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#80b3ff" offset={0} />
        <stop stopColor="#80b3ff" stopOpacity={0} offset={1} />
      </linearGradient>
      <linearGradient
        id="a"
        x1={0}
        y1={90}
        x2={0}
        y2={465}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ff8080" offset={0} />
        <stop stopColor="#ff8080" stopOpacity={0} offset={1} />
      </linearGradient>
      <pattern id="g" width={22} height={22} patternUnits="userSpaceOnUse">
        <rect width={22} height={22} fill="#fff" />
        <path d="m2,0v22M0,2h22" stroke="#000" />
      </pattern>
    </defs>
    <path d="M0,0 90,90v376H0z" fill="url(#a)" />
    <path d="M0,0 90,90h376V0z" fill="url(#b)" />
    <g
      fontSize={12}
      fontWeight={700}
      textAnchor="end"
      fontFamily="DejaVu Sans, sans-serif"
    >
      <switch transform="translate(77,85)">
        <text systemLanguage="en" id="trsvg547">
          <tspan id="trsvg4">{"Attacker"}</tspan>
        </text>
        <text systemLanguage="es" id="trsvg548">
          <tspan id="trsvg5">{"Atacante"}</tspan>
        </text>
        <text systemLanguage="ko" id="trsvg549">
          <tspan id="trsvg6">{"\uACF5\uACA9"}</tspan>
        </text>
        <text id="trsvg550-ja" systemLanguage="ja">
          <tspan id="trsvg7-ja">{"\u653B\u6483"}</tspan>
        </text>
        <text id="trsvg550">
          <tspan id="trsvg7">{"AT"}</tspan>
        </text>
      </switch>
      <switch transform="translate(85,21)">
        <text systemLanguage="en" id="trsvg551">
          <tspan id="trsvg8">{"Defender"}</tspan>
        </text>
        <text systemLanguage="es" id="trsvg552">
          <tspan id="trsvg9">{"Defensor"}</tspan>
        </text>
        <text systemLanguage="ko" id="trsvg553">
          <tspan id="trsvg10">{"\uBC29\uC5B4"}</tspan>
        </text>
        <text id="trsvg554-ja" systemLanguage="ja">
          <tspan id="trsvg11-ja">{"\u9632\u5FA1"}</tspan>
        </text>
        <text id="trsvg554">
          <tspan id="trsvg11">{"DEF"}</tspan>
        </text>
      </switch>
    </g>
    <g id="s" stroke="#000">
      <rect ry={11} x={6} y={90} height={22} width={78} fill="#A8A878" />
      <rect ry={11} x={6} y={112} height={22} width={78} fill="#F08030" />
      <rect ry={11} x={6} y={134} height={22} width={78} fill="#6890F0" />
      <rect ry={11} x={6} y={156} height={22} width={78} fill="#78C850" />
      <rect ry={11} x={6} y={178} height={22} width={78} fill="#F8D030" />
      <rect ry={11} x={6} y={200} height={22} width={78} fill="#98D8D8" />
      <rect ry={11} x={6} y={222} height={22} width={78} fill="#C03028" />
      <rect ry={11} x={6} y={244} height={22} width={78} fill="#A040A0" />
      <rect ry={11} x={6} y={266} height={22} width={78} fill="#E0C068" />
      <rect ry={11} x={6} y={288} height={22} width={78} fill="#A890F0" />
      <rect ry={11} x={6} y={310} height={22} width={78} fill="#F85888" />
      <rect ry={11} x={6} y={332} height={22} width={78} fill="#A8B820" />
      <rect ry={11} x={6} y={354} height={22} width={78} fill="#B8A038" />
      <rect ry={11} x={6} y={376} height={22} width={78} fill="#705898" />
      <rect ry={11} x={6} y={398} height={22} width={78} fill="#7038F8" />
      <rect ry={11} x={6} y={420} height={22} width={78} fill="#705848" />
      <rect ry={11} x={6} y={442} height={22} width={78} fill="#B8B8D0" />
      <rect ry={11} x={6} y={464} height={22} width={78} fill="#EE99AC" />
    </g>
    <use xlinkHref="#s" transform="matrix(0,1,1,0,0,0)" />
    <g
      fontSize={14}
      fontWeight="bold"
      textAnchor="end"
      fontFamily="DejaVu Sans, sans-serif"
      fill="#fff"
    >
      <g transform="translate(79,105)">
        <switch id="normal">
          <text systemLanguage="zh-cn" id="trsvg583">
            <tspan id="trsvg40">{"\u4E00\u822C"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg583">
            <tspan id="trsvg40">{"\u4E00\u822C"}</tspan>
          </text>
          <text systemLanguage="zh-hant" id="trsvg583">
            <tspan id="trsvg40">{"\u4E00\u822C"}</tspan>
          </text>
          <text systemLanguage="zh-hk" id="trsvg583">
            <tspan id="trsvg40">{"\u4E00\u822C"}</tspan>
          </text>
          <text systemLanguage="zh-tw" id="trsvg583">
            <tspan id="trsvg40">{"\u4E00\u822C"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg555">
            <tspan id="trsvg12">{"Norm\xE1ln\xED"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg556">
            <tspan id="trsvg13">{"Normal"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg557">
            <tspan id="trsvg14">{"Normal"}</tspan>
          </text>
          <text systemLanguage="el" fontSize={12} id="trsvg558">
            <tspan id="trsvg15">
              {
                "\u03A6\u03C5\u03C3\u03B9\u03BF\u03BB\u03BF\u03B3\u03B9\u03BA\u03CC\u03C2"
              }
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg559">
            <tspan id="trsvg16">{"Normal"}</tspan>
          </text>
          <text systemLanguage="eo" id="trsvg560">
            <tspan id="trsvg17">{"Normala"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg561">
            <tspan id="trsvg18">{"Normal"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg562">
            <tspan id="trsvg19">{"Normaali"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg563">
            <tspan id="trsvg20">{"Normal"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg564">
            <tspan id="trsvg21">{"\u05E8\u05D2\u05D9\u05DC"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg565">
            <tspan id="trsvg22">{"\u0928\u0949\u0930\u094D\u092E\u0932"}</tspan>
          </text>
          <text systemLanguage="hu" id="trsvg566">
            <tspan id="trsvg23">{"Norm\xE1l"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg567">
            <tspan id="trsvg24">{"Normal"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg568">
            <tspan id="trsvg25">{"Normale"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg569">
            <tspan id="trsvg26">{"\u30CE\u30FC\u30DE\u30EB"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg570">
            <tspan id="trsvg27">{"\uB178\uB9D0"}</tspan>
          </text>
          <text systemLanguage="lb" id="trsvg571">
            <tspan id="trsvg28">{"Normal"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg572">
            <tspan id="trsvg29">{"Biasa"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg573">
            <tspan id="trsvg30">{"Normaal"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg574">
            <tspan id="trsvg31">{"Normal"}</tspan>
          </text>
          <text systemLanguage="pl" fontSize={13} id="trsvg575">
            <tspan id="trsvg32">{"Normalny"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg576">
            <tspan id="trsvg33">{"Normal"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg577">
            <tspan id="trsvg34">{"Normal"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg578">
            <tspan id="trsvg35">
              {"\u041E\u0431\u044B\u0447\u043D\u044B\u0439"}
            </tspan>
          </text>
          <text systemLanguage="sv" id="trsvg579">
            <tspan id="trsvg36">{"Normal"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg580">
            <tspan id="trsvg37">{"\u0E1B\u0E01\u0E15\u0E34"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg581">
            <tspan id="trsvg38">{"Normal"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg582">
            <tspan id="trsvg39">{"Th\u01B0\u1EDDng"}</tspan>
          </text>
          <text systemLanguage="zh" id="trsvg583">
            <tspan id="trsvg40">{"\u4E00\u822C"}</tspan>
          </text>
          <text id="trsvg584">
            <tspan id="trsvg41">{"Normal"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,127)">
        <switch id="fire">
          <text systemLanguage="zh-cn" id="trsvg616">
            <tspan id="trsvg73">{"\u706B"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg616">
            <tspan id="trsvg73">{"\u706B"}</tspan>
          </text>
          <text systemLanguage="zh-hant" id="trsvg616">
            <tspan id="trsvg73">{"\u706B"}</tspan>
          </text>
          <text systemLanguage="zh-hk" id="trsvg616">
            <tspan id="trsvg73">{"\u706B"}</tspan>
          </text>
          <text systemLanguage="zh-tw" id="trsvg616">
            <tspan id="trsvg73">{"\u706B"}</tspan>
          </text>
          <text systemLanguage="bg" id="trsvg585">
            <tspan id="trsvg42">{"\u041E\u0433\u043D\u0435\u043D\u0438"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg586">
            <tspan id="trsvg43">{"Ohniv\xFD"}</tspan>
          </text>
          <text systemLanguage="cy" id="trsvg587">
            <tspan id="trsvg44">{"T\xE2n"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg588">
            <tspan id="trsvg45">{"Ild"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg589">
            <tspan id="trsvg46">{"Feuer"}</tspan>
          </text>
          <text systemLanguage="el" id="trsvg590">
            <tspan id="trsvg47">{"\u03A6\u03C9\u03C4\u03B9\u03AC\u03C2"}</tspan>
          </text>
          <text systemLanguage="en" id="trsvg591">
            <tspan id="trsvg48">{"Fire"}</tspan>
          </text>
          <text systemLanguage="eo" id="trsvg592">
            <tspan id="trsvg49">{"Fajra"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg593">
            <tspan id="trsvg50">{"Fuego"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg594">
            <tspan id="trsvg51">{"Tuli"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg595">
            <tspan id="trsvg52">{"Feu"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg596">
            <tspan id="trsvg53">{"\u05D0\u05E9"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg597">
            <tspan id="trsvg54">{"\u092B\u093C\u093E\u092F\u0930"}</tspan>
          </text>
          <text systemLanguage="hu" id="trsvg598">
            <tspan id="trsvg55">{"T\u0171z"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg599">
            <tspan id="trsvg56">{"Api"}</tspan>
          </text>
          <text systemLanguage="is" id="trsvg600">
            <tspan id="trsvg57">{"Eld"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg601">
            <tspan id="trsvg58">{"Fuoco"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg602">
            <tspan id="trsvg59">{"\u307B\u306E\u304A"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg603">
            <tspan id="trsvg60">{"\uBD88\uAF43"}</tspan>
          </text>
          <text systemLanguage="lb" id="trsvg604">
            <tspan id="trsvg61">{"Feier"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg605">
            <tspan id="trsvg62">{"Api"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg606">
            <tspan id="trsvg63">{"Vuur"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg607">
            <tspan id="trsvg64">{"Ild"}</tspan>
          </text>
          <text systemLanguage="pl" id="trsvg608">
            <tspan id="trsvg65">{"Ognisty"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg609">
            <tspan id="trsvg66">{"Fogo"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg610">
            <tspan id="trsvg67">{"Foc"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg611">
            <tspan id="trsvg68">{"\u041E\u0433\u043E\u043D\u044C"}</tspan>
          </text>
          <text systemLanguage="sv" id="trsvg612">
            <tspan id="trsvg69">{"Eld"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg613">
            <tspan id="trsvg70">{"\u0E44\u0E1F"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg614">
            <tspan id="trsvg71">{"Ate\u015F"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg615">
            <tspan id="trsvg72">{"L\u1EEDa"}</tspan>
          </text>
          <text systemLanguage="zh" id="trsvg616">
            <tspan id="trsvg73">{"\u706B"}</tspan>
          </text>
          <text id="trsvg617">
            <tspan id="trsvg74">{"Fire"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,149)">
        <switch id="water">
          <text systemLanguage="zh-cn" id="trsvg647">
            <tspan id="trsvg104">{"\u6C34"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg647">
            <tspan id="trsvg104">{"\u6C34"}</tspan>
          </text>
          <text systemLanguage="zh-hant" id="trsvg647">
            <tspan id="trsvg104">{"\u6C34"}</tspan>
          </text>
          <text systemLanguage="zh-hk" id="trsvg647">
            <tspan id="trsvg104">{"\u6C34"}</tspan>
          </text>
          <text systemLanguage="zh-tw" id="trsvg647">
            <tspan id="trsvg104">{"\u6C34"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg618">
            <tspan id="trsvg75">{"Vodn\xED"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg619">
            <tspan id="trsvg76">{"Vand"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg620">
            <tspan id="trsvg77">{"Wasser"}</tspan>
          </text>
          <text systemLanguage="el" id="trsvg621">
            <tspan id="trsvg78">{"\u039D\u03B5\u03C1\u03BF\u03CD"}</tspan>
          </text>
          <text systemLanguage="en" id="trsvg622">
            <tspan id="trsvg79">{"Water"}</tspan>
          </text>
          <text systemLanguage="eo" id="trsvg623">
            <tspan id="trsvg80">{"Akva"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg624">
            <tspan id="trsvg81">{"Agua"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg625">
            <tspan id="trsvg82">{"Vesi"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg626">
            <tspan id="trsvg83">{"Eau"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg627">
            <tspan id="trsvg84">{"\u05DE\u05D9\u05DD"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg628">
            <tspan id="trsvg85">{"\u0935\u0949\u091F\u0930"}</tspan>
          </text>
          <text systemLanguage="hu" id="trsvg629">
            <tspan id="trsvg86">{"V\xEDz"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg630">
            <tspan id="trsvg87">{"Air"}</tspan>
          </text>
          <text systemLanguage="is" id="trsvg631">
            <tspan id="trsvg88">{"Vatn"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg632">
            <tspan id="trsvg89">{"Acqua"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg633">
            <tspan id="trsvg90">{"\u307F\u305A"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg634">
            <tspan id="trsvg91">{"\uBB3C"}</tspan>
          </text>
          <text systemLanguage="lb" id="trsvg635">
            <tspan id="trsvg92">{"Waasser"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg636">
            <tspan id="trsvg93">{"Air"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg637">
            <tspan id="trsvg94">{"Water"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg638">
            <tspan id="trsvg95">{"Vann"}</tspan>
          </text>
          <text systemLanguage="pl" id="trsvg639">
            <tspan id="trsvg96">{"Wodny"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg640">
            <tspan id="trsvg97">{"\xC1gua"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg641">
            <tspan id="trsvg98">{"Ap\u0103"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg642">
            <tspan id="trsvg99">{"\u0412\u043E\u0434\u0430"}</tspan>
          </text>
          <text systemLanguage="sv" id="trsvg643">
            <tspan id="trsvg100">{"Vatten"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg644">
            <tspan id="trsvg101">{"\u0E19\u0E49\u0E33"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg645">
            <tspan id="trsvg102">{"Su"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg646">
            <tspan id="trsvg103">{"N\u01B0\u1EDBc"}</tspan>
          </text>
          <text systemLanguage="zh" id="trsvg647">
            <tspan id="trsvg104">{"\u6C34"}</tspan>
          </text>
          <text id="trsvg648">
            <tspan id="trsvg105">{"Water"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,171)">
        <switch id="grass">
          <text systemLanguage="pt-br" id="trsvg672">
            <tspan id="trsvg129">{"Planta"}</tspan>
          </text>
          <text systemLanguage="zh-cn" id="trsvg679">
            <tspan id="trsvg136">{"\u8349"}</tspan>
          </text>
          <text systemLanguage="zh-hk" id="trsvg679">
            <tspan id="trsvg136">{"\u8349"}</tspan>
          </text>
          <text systemLanguage="zh-tw" id="trsvg679">
            <tspan id="trsvg136">{"\u8349"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg679">
            <tspan id="trsvg136">{"\u8349"}</tspan>
          </text>
          <text systemLanguage="zh-hant" id="trsvg679">
            <tspan id="trsvg136">{"\u8349"}</tspan>
          </text>
          <text systemLanguage="bg" id="trsvg649">
            <tspan id="trsvg106">
              {"\u0420\u0430\u0441\u0442\u0438\u0442\u0435\u043B\u043D\u0438"}
            </tspan>
          </text>
          <text systemLanguage="cs" id="trsvg650">
            <tspan id="trsvg107">{"Travn\xED"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg651">
            <tspan id="trsvg108">{"Gr\xE6s"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg652">
            <tspan id="trsvg109">{"Pflanze"}</tspan>
          </text>
          <text systemLanguage="el" id="trsvg653">
            <tspan id="trsvg110">{"\u03A6\u03C5\u03C4\u03BF\u03CD"}</tspan>
          </text>
          <text systemLanguage="en" id="trsvg654">
            <tspan id="trsvg111">{"Grass"}</tspan>
          </text>
          <text systemLanguage="eo" id="trsvg655">
            <tspan id="trsvg112">{"Planta"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg656">
            <tspan id="trsvg113">{"Planta"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg657">
            <tspan id="trsvg114">{"Ruoho"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg658">
            <tspan id="trsvg115">{"Plante"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg659">
            <tspan id="trsvg116">{"\u05E2\u05E9\u05D1"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg660">
            <tspan id="trsvg117">{"\u0917\u094D\u0930\u093E\u0938"}</tspan>
          </text>
          <text systemLanguage="hu" id="trsvg661">
            <tspan id="trsvg118">{"F\u0171"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg662">
            <tspan id="trsvg119">{"Daun"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg663">
            <tspan id="trsvg120">{"Erba"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg664">
            <tspan id="trsvg121">{"\u304F\u3055"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg665">
            <tspan id="trsvg122">{"\uD480"}</tspan>
          </text>
          <text systemLanguage="lb" id="trsvg666">
            <tspan id="trsvg123">{"Gras"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg667">
            <tspan id="trsvg124">{"Rumput"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg668">
            <tspan id="trsvg125">{"Gras"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg669">
            <tspan id="trsvg126">{"Gress"}</tspan>
          </text>
          <text systemLanguage="pl" fontSize={13} id="trsvg670">
            <tspan id="trsvg127">{"Trawiasty"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg671">
            <tspan id="trsvg128">{"Erva"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg673">
            <tspan id="trsvg130">{"Iarb\u0103"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg674">
            <tspan id="trsvg131">{"\u0422\u0440\u0430\u0432\u0430"}</tspan>
          </text>
          <text systemLanguage="sv" id="trsvg675">
            <tspan id="trsvg132">{"Gr\xE4s"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg676">
            <tspan id="trsvg133">{"\u0E2B\u0E0D\u0E49\u0E32"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg677">
            <tspan id="trsvg134">{"Bitki"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg678">
            <tspan id="trsvg135">{"C\u1ECF"}</tspan>
          </text>
          <text systemLanguage="zh" id="trsvg679">
            <tspan id="trsvg136">{"\u8349"}</tspan>
          </text>
          <text id="trsvg680">
            <tspan id="trsvg137">{"Grass"}</tspan>
          </text>
        </switch>
      </g>
      <g fill="#000">
        <g transform="translate(79,193)">
          <switch id="electric">
            <text
              systemLanguage="zh, zh-cn, zh-hk, zh-tw, zh-hant"
              id="trsvg706"
            >
              <tspan id="trsvg163">{"\u96FB"}</tspan>
            </text>
            <text systemLanguage="zh-hans" id="trsvg707">
              <tspan id="trsvg164">{"\u7535"}</tspan>
            </text>
            <text systemLanguage="cs" fontSize={12} id="trsvg681">
              <tspan id="trsvg138">{"Elektrick\xFD"}</tspan>
            </text>
            <text systemLanguage="de" id="trsvg683">
              <tspan id="trsvg140">{"Elektro"}</tspan>
            </text>
            <text systemLanguage="el" fontSize={10} id="trsvg684">
              <tspan id="trsvg141">
                {
                  "\u0397\u03BB\u03B5\u03BA\u03C4\u03C1\u03B9\u03C3\u03BC\u03BF\u03CD"
                }
              </tspan>
            </text>
            <text systemLanguage="en" id="trsvg685">
              <tspan id="trsvg142">{"Electric"}</tspan>
            </text>
            <text systemLanguage="es" id="trsvg686">
              <tspan id="trsvg143">{"El\xE9ctrico"}</tspan>
            </text>
            <text systemLanguage="fi" id="trsvg687">
              <tspan id="trsvg144">{"S\xE4hk\xF6"}</tspan>
            </text>
            <text systemLanguage="fr" fontSize={11} id="trsvg688">
              <tspan id="trsvg145">{"\xC9lectrique"}</tspan>
            </text>
            <text systemLanguage="he" id="trsvg689">
              <tspan id="trsvg146">{"\u05D7\u05E9\u05DE\u05DC"}</tspan>
            </text>
            <text systemLanguage="hi" id="trsvg690">
              <tspan id="trsvg147">
                {"\u0907\u0932\u0947\u0915\u094D\u091F\u094D\u0930\u093F\u0915"}
              </tspan>
            </text>
            <text systemLanguage="hu" fontSize={11} id="trsvg691">
              <tspan id="trsvg148">{"Elektromos"}</tspan>
            </text>
            <text systemLanguage="id" id="trsvg692">
              <tspan id="trsvg149">{"Listrik"}</tspan>
            </text>
            <text systemLanguage="is" id="trsvg693">
              <tspan id="trsvg150">{"Elding"}</tspan>
            </text>
            <text systemLanguage="it" id="trsvg694">
              <tspan id="trsvg151">{"Elettro"}</tspan>
            </text>
            <text systemLanguage="ja" id="trsvg695">
              <tspan id="trsvg152">{"\u3067\u3093\u304D"}</tspan>
            </text>
            <text systemLanguage="ko" id="trsvg696">
              <tspan id="trsvg153">{"\uC804\uAE30"}</tspan>
            </text>
            <text systemLanguage="ms" id="trsvg697">
              <tspan id="trsvg154">{"Elektrik"}</tspan>
            </text>
            <text systemLanguage="nl" fontSize={12} id="trsvg698">
              <tspan id="trsvg155">{"Elektrisch"}</tspan>
            </text>
            <text systemLanguage="pl" fontSize={10} id="trsvg699">
              <tspan id="trsvg156">{"Elektryczny"}</tspan>
            </text>
            <text systemLanguage="pt" id="trsvg700">
              <tspan id="trsvg157">{"El\xE9trico"}</tspan>
            </text>
            <text systemLanguage="ro" fontSize={12} id="trsvg701">
              <tspan id="trsvg158">{"Electricitate"}</tspan>
            </text>
            <text systemLanguage="ru" id="trsvg702">
              <tspan id="trsvg159">
                {"\u042D\u043B\u0435\u043A\u0442\u0440\u043E"}
              </tspan>
            </text>
            <text systemLanguage="th" id="trsvg703">
              <tspan id="trsvg160">{"\u0E44\u0E1F\u0E1F\u0E49\u0E32"}</tspan>
            </text>
            <text systemLanguage="tr" id="trsvg704">
              <tspan id="trsvg161">{"Elektrik"}</tspan>
            </text>
            <text systemLanguage="vi" id="trsvg705">
              <tspan id="trsvg162">{"\u0110i\u1EC7n"}</tspan>
            </text>
            <text systemLanguage="da" fontSize={13} id="trsvg682">
              <tspan id="trsvg139">{"Elektrisk"}</tspan>
            </text>
            <text systemLanguage="no" fontSize={13} id="trsvg682">
              <tspan id="trsvg139">{"Elektrisk"}</tspan>
            </text>
            <text systemLanguage="sv" fontSize={13} id="trsvg682">
              <tspan id="trsvg139">{"Elektrisk"}</tspan>
            </text>
            <text id="trsvg708">
              <tspan id="trsvg165">{"Electric"}</tspan>
            </text>
          </switch>
        </g>
        <g transform="translate(79,215)">
          <switch id="ice">
            <text systemLanguage="zh-cn" id="trsvg737">
              <tspan id="trsvg194">{"\u51B0"}</tspan>
            </text>
            <text systemLanguage="zh-hk" id="trsvg737">
              <tspan id="trsvg194">{"\u51B0"}</tspan>
            </text>
            <text systemLanguage="zh-tw" id="trsvg737">
              <tspan id="trsvg194">{"\u51B0"}</tspan>
            </text>
            <text systemLanguage="zh-hans" id="trsvg737">
              <tspan id="trsvg194">{"\u51B0"}</tspan>
            </text>
            <text systemLanguage="zh-hant" id="trsvg737">
              <tspan id="trsvg194">{"\u51B0"}</tspan>
            </text>
            <text systemLanguage="cs" id="trsvg709">
              <tspan id="trsvg166">{"Ledov\xFD"}</tspan>
            </text>
            <text systemLanguage="da" id="trsvg710">
              <tspan id="trsvg167">{"Is"}</tspan>
            </text>
            <text systemLanguage="de" id="trsvg711">
              <tspan id="trsvg168">{"Eis"}</tspan>
            </text>
            <text systemLanguage="el" id="trsvg712">
              <tspan id="trsvg169">{"\u03A0\u03AC\u03B3\u03BF\u03C5"}</tspan>
            </text>
            <text systemLanguage="en" id="trsvg713">
              <tspan id="trsvg170">{"Ice"}</tspan>
            </text>
            <text systemLanguage="es" id="trsvg714">
              <tspan id="trsvg171">{"Hielo"}</tspan>
            </text>
            <text systemLanguage="fi" id="trsvg715">
              <tspan id="trsvg172">{"J\xE4\xE4"}</tspan>
            </text>
            <text systemLanguage="fr" id="trsvg716">
              <tspan id="trsvg173">{"Glace"}</tspan>
            </text>
            <text systemLanguage="he" id="trsvg717">
              <tspan id="trsvg174">{"\u05E7\u05E8\u05D7"}</tspan>
            </text>
            <text systemLanguage="hi" id="trsvg718">
              <tspan id="trsvg175">{"\u0906\u0907\u0938"}</tspan>
            </text>
            <text systemLanguage="hu" id="trsvg719">
              <tspan id="trsvg176">{"J\xE9g"}</tspan>
            </text>
            <text systemLanguage="id" id="trsvg720">
              <tspan id="trsvg177">{"Es"}</tspan>
            </text>
            <text systemLanguage="is" id="trsvg721">
              <tspan id="trsvg178">{"\xCDs"}</tspan>
            </text>
            <text systemLanguage="it" id="trsvg722">
              <tspan id="trsvg179">{"Ghiaccio"}</tspan>
            </text>
            <text systemLanguage="ja" id="trsvg723">
              <tspan id="trsvg180">{"\u3053\u304A\u308A"}</tspan>
            </text>
            <text systemLanguage="ko" id="trsvg724">
              <tspan id="trsvg181">{"\uC5BC\uC74C"}</tspan>
            </text>
            <text systemLanguage="ms" id="trsvg725">
              <tspan id="trsvg182">{"Ais"}</tspan>
            </text>
            <text systemLanguage="nl" id="trsvg726">
              <tspan id="trsvg183">{"IJs"}</tspan>
            </text>
            <text systemLanguage="no" id="trsvg727">
              <tspan id="trsvg184">{"Is"}</tspan>
            </text>
            <text systemLanguage="pl" id="trsvg728">
              <tspan id="trsvg185">{"Lodowy"}</tspan>
            </text>
            <text systemLanguage="pt" id="trsvg729">
              <tspan id="trsvg186">{"Gelo"}</tspan>
            </text>
            <text systemLanguage="ro" id="trsvg730">
              <tspan id="trsvg187">{"Ghea\u021B\u0103"}</tspan>
            </text>
            <text systemLanguage="ru" id="trsvg731">
              <tspan id="trsvg188">{"\u041B\u0451\u0434"}</tspan>
            </text>
            <text systemLanguage="sk" id="trsvg732">
              <tspan id="trsvg189">{"\u013Dadov\xFD"}</tspan>
            </text>
            <text systemLanguage="sv" id="trsvg733">
              <tspan id="trsvg190">{"Is"}</tspan>
            </text>
            <text systemLanguage="th" id="trsvg734">
              <tspan id="trsvg191">
                {"\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07"}
              </tspan>
            </text>
            <text systemLanguage="tr" id="trsvg735">
              <tspan id="trsvg192">{"Buz"}</tspan>
            </text>
            <text systemLanguage="vi" id="trsvg736">
              <tspan id="trsvg193">{"B\u0103ng"}</tspan>
            </text>
            <text systemLanguage="zh" id="trsvg737">
              <tspan id="trsvg194">{"\u51B0"}</tspan>
            </text>
            <text id="trsvg738">
              <tspan id="trsvg195">{"Ice"}</tspan>
            </text>
          </switch>
        </g>
      </g>
      <g transform="translate(79,237)">
        <switch id="fighting">
          <text systemLanguage="zh-hans" id="trsvg766">
            <tspan id="trsvg223">{"\u683C\u6597"}</tspan>
          </text>
          <text systemLanguage="zh-hk" id="trsvg765">
            <tspan id="trsvg222">{"\u683C\u9B25"}</tspan>
          </text>
          <text systemLanguage="zh-cn" id="trsvg765">
            <tspan id="trsvg222">{"\u683C\u9B25"}</tspan>
          </text>
          <text systemLanguage="zh-tw" id="trsvg765">
            <tspan id="trsvg222">{"\u683C\u9B25"}</tspan>
          </text>
          <text systemLanguage="zh-hant" id="trsvg765">
            <tspan id="trsvg222">{"\u683C\u9B25"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg739">
            <tspan id="trsvg196">{"Bojov\xFD"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg740">
            <tspan id="trsvg197">{"Kamp"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg741">
            <tspan id="trsvg198">{"Kampf"}</tspan>
          </text>
          <text systemLanguage="el" id="trsvg742">
            <tspan id="trsvg199">
              {"\u039C\u03B1\u03C7\u03B7\u03C4\u03AE\u03C2"}
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg743">
            <tspan id="trsvg200">{"Fighting"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg744">
            <tspan id="trsvg201">{"Lucha"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg745">
            <tspan id="trsvg202">{"Taistelu"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg746">
            <tspan id="trsvg203">{"Combat"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg747">
            <tspan id="trsvg204">{"\u05DC\u05D7\u05D9\u05DE\u05D4"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg748">
            <tspan id="trsvg205">
              {"\u092B\u093C\u093E\u0907\u091F\u093F\u0902\u0917"}
            </tspan>
          </text>
          <text systemLanguage="hu" id="trsvg749">
            <tspan id="trsvg206">{"Harcos"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg750">
            <tspan id="trsvg207">{"Petarung"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg751">
            <tspan id="trsvg208">{"Lotta"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg752">
            <tspan id="trsvg209">{"\u304B\u304F\u3068\u3046"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg753">
            <tspan id="trsvg210">{"\uACA9\uD22C"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg754">
            <tspan id="trsvg211">{"Berlawan"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg755">
            <tspan id="trsvg212">{"Vecht"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg756">
            <tspan id="trsvg213">{"Sl\xE5ss"}</tspan>
          </text>
          <text systemLanguage="pl" fontSize={13} id="trsvg757">
            <tspan id="trsvg214">{"Walcz\u0105cy"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg758">
            <tspan id="trsvg215">{"Luta"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg759">
            <tspan id="trsvg216">{"Lupt\u0103"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg760">
            <tspan id="trsvg217">
              {"\u0421\u0440\u0430\u0436\u0435\u043D\u0438\u0435"}
            </tspan>
          </text>
          <text systemLanguage="sv" id="trsvg761">
            <tspan id="trsvg218">{"Strids"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg762">
            <tspan id="trsvg219">
              {"\u0E15\u0E48\u0E2D\u0E2A\u0E39\u0E49"}
            </tspan>
          </text>
          <text systemLanguage="tr" id="trsvg763">
            <tspan id="trsvg220">{"D\xF6v\xFC\u015F\xE7\xFC"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg764">
            <tspan id="trsvg221">{"Gi\xE1c \u0111\u1EA5u"}</tspan>
          </text>
          <text systemLanguage="zh" id="trsvg765">
            <tspan id="trsvg222">{"\u683C\u9B25"}</tspan>
          </text>
          <text id="trsvg767">
            <tspan id="trsvg224">{"Fighting"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,259)">
        <switch id="poison">
          <text systemLanguage="zh-cn" id="trsvg794">
            <tspan id="trsvg251">{"\u6BD2"}</tspan>
          </text>
          <text systemLanguage="zh-hk" id="trsvg794">
            <tspan id="trsvg251">{"\u6BD2"}</tspan>
          </text>
          <text systemLanguage="zh-tw" id="trsvg794">
            <tspan id="trsvg251">{"\u6BD2"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg794">
            <tspan id="trsvg251">{"\u6BD2"}</tspan>
          </text>
          <text systemLanguage="zh-hant" id="trsvg794">
            <tspan id="trsvg251">{"\u6BD2"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg768">
            <tspan id="trsvg225">{"Jedovat\xFD"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg769">
            <tspan id="trsvg226">{"Gift"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg770">
            <tspan id="trsvg227">{"Gift"}</tspan>
          </text>
          <text systemLanguage="el" fontSize={12} id="trsvg771">
            <tspan id="trsvg228">
              {"\u0394\u03B7\u03BB\u03B7\u03C4\u03B7\u03C1\u03AF\u03BF\u03C5"}
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg772">
            <tspan id="trsvg229">{"Poison"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg773">
            <tspan id="trsvg230">{"Veneno"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg774">
            <tspan id="trsvg231">{"Myrkky"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg775">
            <tspan id="trsvg232">{"Poison"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg776">
            <tspan id="trsvg233">{"\u05E8\u05E2\u05DC"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg777">
            <tspan id="trsvg234">
              {"\u092A\u0949\u0907\u091C\u093C\u0928"}
            </tspan>
          </text>
          <text systemLanguage="hu" id="trsvg778">
            <tspan id="trsvg235">{"M\xE9reg"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg779">
            <tspan id="trsvg236">{"Racun"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg780">
            <tspan id="trsvg237">{"Veleno"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg781">
            <tspan id="trsvg238">{"\u3069\u304F"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg782">
            <tspan id="trsvg239">{"\uB3C5"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg783">
            <tspan id="trsvg240">{"Racun"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg784">
            <tspan id="trsvg241">{"Gif"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg785">
            <tspan id="trsvg242">{"Gift"}</tspan>
          </text>
          <text systemLanguage="pl" id="trsvg786">
            <tspan id="trsvg243">{"Truj\u0105cy"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg787">
            <tspan id="trsvg244">{"Veneno"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg788">
            <tspan id="trsvg245">{"Otrav\u0103"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg789">
            <tspan id="trsvg246">{"\u042F\u0434"}</tspan>
          </text>
          <text systemLanguage="sv" id="trsvg790">
            <tspan id="trsvg247">{"Gift"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg791">
            <tspan id="trsvg248">{"\u0E1E\u0E34\u0E29"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg792">
            <tspan id="trsvg249">{"Zehir"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg793">
            <tspan id="trsvg250">{"\u0110\u1ED9c"}</tspan>
          </text>
          <text systemLanguage="zh" id="trsvg794">
            <tspan id="trsvg251">{"\u6BD2"}</tspan>
          </text>
          <text id="trsvg795">
            <tspan id="trsvg252">{"Poison"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,281)">
        <switch id="ground">
          <text systemLanguage="pt-br" fontSize={12} id="trsvg816">
            <tspan id="trsvg273">{"Terrestre"}</tspan>
          </text>
          <text systemLanguage="zh-cn" id="trsvg823">
            <tspan id="trsvg280">{"\u5730\u9762"}</tspan>
          </text>
          <text systemLanguage="zh-hk" id="trsvg823">
            <tspan id="trsvg280">{"\u5730\u9762"}</tspan>
          </text>
          <text systemLanguage="zh-tw" id="trsvg823">
            <tspan id="trsvg280">{"\u5730\u9762"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg823">
            <tspan id="trsvg280">{"\u5730\u9762"}</tspan>
          </text>
          <text systemLanguage="zh-hant" id="trsvg823">
            <tspan id="trsvg280">{"\u5730\u9762"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg796">
            <tspan id="trsvg253">{"Zemn\xED"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg797">
            <tspan id="trsvg254">{"Jord"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg798">
            <tspan id="trsvg255">{"Boden"}</tspan>
          </text>
          <text systemLanguage="el" id="trsvg799">
            <tspan id="trsvg256">
              {"\u0395\u03B4\u03AC\u03C6\u03BF\u03C5\u03C2"}
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg800">
            <tspan id="trsvg257">{"Ground"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg801">
            <tspan id="trsvg258">{"Tierra"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg802">
            <tspan id="trsvg259">{"Maa"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg803">
            <tspan id="trsvg260">{"Sol"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg804">
            <tspan id="trsvg261">{"\u05D0\u05D3\u05DE\u05D4"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg805">
            <tspan id="trsvg262">{"\u092D\u0942\u092E\u093F"}</tspan>
          </text>
          <text systemLanguage="hu" id="trsvg806">
            <tspan id="trsvg263">{"F\xF6ld"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg807">
            <tspan id="trsvg264">{"Tanah"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg808">
            <tspan id="trsvg265">{"Terra"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg809">
            <tspan id="trsvg266">{"\u3058\u3081\u3093"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg810">
            <tspan id="trsvg267">{"\uB545"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg811">
            <tspan id="trsvg268">{"Darat"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg812">
            <tspan id="trsvg269">{"Grond"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg813">
            <tspan id="trsvg270">{"Grund"}</tspan>
          </text>
          <text systemLanguage="pl" id="trsvg814">
            <tspan id="trsvg271">{"Ziemny"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg815">
            <tspan id="trsvg272">{"Terra"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg817">
            <tspan id="trsvg274">{"P\u0103m\xE2nt"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg818">
            <tspan id="trsvg275">{"\u0417\u0435\u043C\u043B\u044F"}</tspan>
          </text>
          <text systemLanguage="sv" id="trsvg819">
            <tspan id="trsvg276">{"Mark"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg820">
            <tspan id="trsvg277">{"\u0E14\u0E34\u0E19"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg821">
            <tspan id="trsvg278">{"Yer"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg822">
            <tspan id="trsvg279">{"\u0110\u1EA5t"}</tspan>
          </text>
          <text systemLanguage="zh" id="trsvg823">
            <tspan id="trsvg280">{"\u5730\u9762"}</tspan>
          </text>
          <text id="trsvg824">
            <tspan id="trsvg281">{"Ground"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,303)">
        <switch id="flying">
          <text systemLanguage="zh, zh-cn, zh-hant, zh-hk, zh-tw" id="trsvg851">
            <tspan id="trsvg308">{"\u98DB\u884C"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg852">
            <tspan id="trsvg309">{"\u98DE\u884C"}</tspan>
          </text>
          <text systemLanguage="pt-br" id="trsvg844">
            <tspan id="trsvg301">{"Voador"}</tspan>
          </text>
          <text fontSize={12} systemLanguage="no" id="trsvg825">
            <tspan id="trsvg282">{"Flyvende"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg826">
            <tspan id="trsvg283">{"L\xE9taj\xEDc\xED"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg827">
            <tspan id="trsvg284">{"Flyve"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg828">
            <tspan id="trsvg285">{"Flug"}</tspan>
          </text>
          <text systemLanguage="el" fontSize={12} id="trsvg829">
            <tspan id="trsvg286">
              {"\u0399\u03C0\u03C4\u03AC\u03BC\u03B5\u03BD\u03BF\u03C2"}
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg830">
            <tspan id="trsvg287">{"Flying"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg831">
            <tspan id="trsvg288">{"Volador"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg832">
            <tspan id="trsvg289">{"Lento"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg833">
            <tspan id="trsvg290">{"Vol"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg834">
            <tspan id="trsvg291">{"\u05DE\u05E2\u05D5\u05E4\u05E3"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg835">
            <tspan id="trsvg292">
              {"\u092B\u093C\u094D\u0932\u093E\u0907\u0902\u0917"}
            </tspan>
          </text>
          <text systemLanguage="hu" id="trsvg836">
            <tspan id="trsvg293">{"Rep\xFCl\u0151"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg837">
            <tspan id="trsvg294">{"Terbang"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg838">
            <tspan id="trsvg295">{"Volante"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg839">
            <tspan id="trsvg296">{"\u3072\u3053\u3046"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg840">
            <tspan id="trsvg297">{"\uBE44\uD589"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg841">
            <tspan id="trsvg298">{"Terbang"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg842">
            <tspan id="trsvg299">{"Vlieg"}</tspan>
          </text>
          <text systemLanguage="pl" id="trsvg843">
            <tspan id="trsvg300">{"Lataj\u0105cy"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg845">
            <tspan id="trsvg302">{"Zbor"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg846">
            <tspan id="trsvg303">
              {"\u041B\u0435\u0442\u0430\u044E\u0449\u0438\u0439"}
            </tspan>
          </text>
          <text systemLanguage="sv" id="trsvg847">
            <tspan id="trsvg304">{"Flygande"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg848">
            <tspan id="trsvg305">{"\u0E1A\u0E34\u0E19"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg849">
            <tspan id="trsvg306">{"U\xE7an"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg850">
            <tspan id="trsvg307">{"Bay"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg844">
            <tspan id="trsvg301">{"Voador"}</tspan>
          </text>
          <text id="trsvg853">
            <tspan id="trsvg310">{"Flying"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,325)">
        <switch id="psychic">
          <text systemLanguage="fr-ca" fontSize={11} id="trsvg862">
            <tspan id="trsvg319">{"Psychique"}</tspan>
          </text>
          <text
            systemLanguage="zh, zh-cn, zh-hk, zh-tw, zh-hans, zh-hant"
            id="trsvg881"
          >
            <tspan id="trsvg338">{"\u8D85\u80FD\u529B"}</tspan>
          </text>
          <text systemLanguage="pt-br" id="trsvg874">
            <tspan id="trsvg331">{"Ps\xEDquico"}</tspan>
          </text>
          <text systemLanguage="cs" fontSize={12} id="trsvg854">
            <tspan id="trsvg311">{"Psychick\xFD"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg855">
            <tspan id="trsvg312">{"Synsk"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg856">
            <tspan id="trsvg313">{"Psycho"}</tspan>
          </text>
          <text systemLanguage="el" fontSize={13} id="trsvg857">
            <tspan id="trsvg314">
              {"\u039C\u03AD\u03BD\u03C4\u03B9\u03BF\u03C5\u03BC"}
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg858">
            <tspan id="trsvg315">{"Psychic"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg859">
            <tspan id="trsvg316">{"Ps\xEDquico"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg860">
            <tspan id="trsvg317">{"Meedio"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg861">
            <tspan id="trsvg318">{"Psy"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg863">
            <tspan id="trsvg320">
              {"\u05E2\u05DC \u05D7\u05D5\u05E9\u05D9"}
            </tspan>
          </text>
          <text systemLanguage="hi" id="trsvg864">
            <tspan id="trsvg321">
              {"\u0938\u093E\u0907\u0915\u093F\u0915"}
            </tspan>
          </text>
          <text systemLanguage="hu" fontSize={11} id="trsvg865">
            <tspan id="trsvg322">{"Pszichikus"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg866">
            <tspan id="trsvg323">{"Psychic"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg867">
            <tspan id="trsvg324">{"Psico"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg868">
            <tspan id="trsvg325">{"\u30A8\u30B9\u30D1\u30FC"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg869">
            <tspan id="trsvg326">{"\uC5D0\uC2A4\uD37C"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg870">
            <tspan id="trsvg327">{"Psikik"}</tspan>
          </text>
          <text systemLanguage="nl" fontSize={12} id="trsvg871">
            <tspan id="trsvg328">{"Psychisch"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg872">
            <tspan id="trsvg329">{"Psykisk"}</tspan>
          </text>
          <text systemLanguage="pl" fontSize={11} id="trsvg873">
            <tspan id="trsvg330">{"Psychiczny"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg875">
            <tspan id="trsvg332">{"Psihic"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg876">
            <tspan id="trsvg333">{"\u041F\u0441\u0438\u0445\u043E"}</tspan>
          </text>
          <text systemLanguage="sv" id="trsvg877">
            <tspan id="trsvg334">{"Psykisk"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg878">
            <tspan id="trsvg335">
              {"\u0E1E\u0E25\u0E31\u0E07\u0E08\u0E34\u0E15"}
            </tspan>
          </text>
          <text systemLanguage="tr" id="trsvg879">
            <tspan id="trsvg336">{"Psi\u015Fik"}</tspan>
          </text>
          <text systemLanguage="vi" fontSize={12} id="trsvg880">
            <tspan id="trsvg337">{"Si\xEAu n\u0103ng"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg874">
            <tspan id="trsvg331">{"Ps\xEDquico"}</tspan>
          </text>
          <text id="trsvg882">
            <tspan id="trsvg339">{"Psychic"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,347)">
        <switch id="bug">
          <text systemLanguage="pt-br" id="trsvg903">
            <tspan id="trsvg360">{"Inseto"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg911">
            <tspan id="trsvg368">{"\u866B"}</tspan>
          </text>
          <text systemLanguage="zh-cn" id="trsvg910">
            <tspan id="trsvg367">{"\u87F2"}</tspan>
          </text>
          <text systemLanguage="zh-hant" id="trsvg910">
            <tspan id="trsvg367">{"\u87F2"}</tspan>
          </text>
          <text systemLanguage="zh-hk" id="trsvg910">
            <tspan id="trsvg367">{"\u87F2"}</tspan>
          </text>
          <text systemLanguage="zh-tw" id="trsvg910">
            <tspan id="trsvg367">{"\u87F2"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg883">
            <tspan id="trsvg340">{"Hmyz\xED"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg884">
            <tspan id="trsvg341">{"Kryb"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg885">
            <tspan id="trsvg342">{"K\xE4fer"}</tspan>
          </text>
          <text systemLanguage="el" id="trsvg886">
            <tspan id="trsvg343">
              {"\u0395\u03BD\u03C4\u03CC\u03BC\u03BF\u03C5"}
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg887">
            <tspan id="trsvg344">{"Bug"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg888">
            <tspan id="trsvg345">{"Bicho"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg889">
            <tspan id="trsvg346">{"\xD6t\xF6kk\xE4"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg890">
            <tspan id="trsvg347">{"Insecte"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg891">
            <tspan id="trsvg348">{"\u05D7\u05E8\u05E7"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg892">
            <tspan id="trsvg349">{"\u092C\u0917"}</tspan>
          </text>
          <text systemLanguage="hu" id="trsvg893">
            <tspan id="trsvg350">{"Bog\xE1r"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg894">
            <tspan id="trsvg351">{"Serangga"}</tspan>
          </text>
          <text systemLanguage="it" fontSize={12} id="trsvg895">
            <tspan id="trsvg352">{"Coleottero"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg896">
            <tspan id="trsvg353">{"\u3080\u3057"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg897">
            <tspan id="trsvg354">{"\uBC8C\uB808"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg898">
            <tspan id="trsvg355">{"Serangga"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg899">
            <tspan id="trsvg356">{"Insect"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg900">
            <tspan id="trsvg357">{"Insekt"}</tspan>
          </text>
          <text systemLanguage="pl" id="trsvg901">
            <tspan id="trsvg358">{"Robak"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg902">
            <tspan id="trsvg359">{"Insecto"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg904">
            <tspan id="trsvg361">{"Insect\u0103"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg905">
            <tspan id="trsvg362">
              {"\u041D\u0430\u0441\u0435\u043A\u043E\u043C\u043E\u0435"}
            </tspan>
          </text>
          <text systemLanguage="sv" id="trsvg906">
            <tspan id="trsvg363">{"Insekt"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg907">
            <tspan id="trsvg364">{"\u0E41\u0E21\u0E25\u0E07"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg908">
            <tspan id="trsvg365">{"B\xF6cek"}</tspan>
          </text>
          <text systemLanguage="vi" fontSize={12} id="trsvg909">
            <tspan id="trsvg366">{"C\xF4n tr\xF9ng"}</tspan>
          </text>
          <text systemLanguage="zh" id="trsvg910">
            <tspan id="trsvg367">{"\u87F2"}</tspan>
          </text>
          <text id="trsvg912">
            <tspan id="trsvg369">{"Bug"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,369)">
        <switch id="rock">
          <text
            systemLanguage="zh, zh-cn, zh-hans, zh-hant, zh-hk, zh-tw"
            id="trsvg939"
          >
            <tspan id="trsvg396">{"\u5CA9\u77F3"}</tspan>
          </text>
          <text systemLanguage="pt-br" id="trsvg932">
            <tspan id="trsvg389">{"Pedra"}</tspan>
          </text>
          <text fontSize={12} systemLanguage="cs" id="trsvg913">
            <tspan id="trsvg370">{"Kamenn\xFD"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg914">
            <tspan id="trsvg371">{"Sten"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg915">
            <tspan id="trsvg372">{"Gestein"}</tspan>
          </text>
          <text systemLanguage="el" id="trsvg916">
            <tspan id="trsvg373">
              {"\u03A0\u03AD\u03C4\u03C1\u03B1\u03C2"}
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg917">
            <tspan id="trsvg374">{"Rock"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg918">
            <tspan id="trsvg375">{"Roca"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg919">
            <tspan id="trsvg376">{"Kivi"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg920">
            <tspan id="trsvg377">{"Roche"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg921">
            <tspan id="trsvg378">{"\u05E1\u05DC\u05E2"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg922">
            <tspan id="trsvg379">{"\u0930\u0949\u0915"}</tspan>
          </text>
          <text systemLanguage="hu" id="trsvg923">
            <tspan id="trsvg380">{"Szikla"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg924">
            <tspan id="trsvg381">{"Bebatuan"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg925">
            <tspan id="trsvg382">{"Roccia"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg926">
            <tspan id="trsvg383">{"\u3044\u308F"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg927">
            <tspan id="trsvg384">{"\uBC14\uC704"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg928">
            <tspan id="trsvg385">{"Batu"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg929">
            <tspan id="trsvg386">{"Steen"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg930">
            <tspan id="trsvg387">{"Stein"}</tspan>
          </text>
          <text systemLanguage="pl" fontSize={12} id="trsvg931">
            <tspan id="trsvg388">{"Kamienny"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg933">
            <tspan id="trsvg390">{"Piatr\u0103"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg934">
            <tspan id="trsvg391">
              {"\u041A\u0430\u043C\u0435\u043D\u044C"}
            </tspan>
          </text>
          <text systemLanguage="sv" id="trsvg935">
            <tspan id="trsvg392">{"Sten"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg936">
            <tspan id="trsvg393">{"\u0E2B\u0E34\u0E19"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg937">
            <tspan id="trsvg394">{"Kaya"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg938">
            <tspan id="trsvg395">{"\u0110\xE1"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg932">
            <tspan id="trsvg389">{"Pedra"}</tspan>
          </text>
          <text id="trsvg940">
            <tspan id="trsvg397">{"Rock"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,391)">
        <switch id="ghost">
          <text systemLanguage="zh, zh-hk, zh-cn, zh-tw, zh-hant" id="trsvg968">
            <tspan id="trsvg425">{"\u5E7D\u9748"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg969">
            <tspan id="trsvg426">{"\u5E7D\u7075"}</tspan>
          </text>
          <text fontSize={12} systemLanguage="pt-br" id="trsvg947">
            <tspan id="trsvg404">{"Fantasma"}</tspan>
          </text>
          <text fontSize={12} systemLanguage="bg" id="trsvg941">
            <tspan id="trsvg398">
              {"\u041F\u0440\u0438\u0437\u0440\u0430\u0447\u043D\u0438"}
            </tspan>
          </text>
          <text fontSize={12} systemLanguage="da" id="trsvg942">
            <tspan id="trsvg399">{"Sp\xF8gelse"}</tspan>
          </text>
          <text fontSize={12} systemLanguage="el" id="trsvg943">
            <tspan id="trsvg400">
              {"\u03A6\u03AC\u03BD\u03C4\u03B1\u03C3\u03BC\u03B1"}
            </tspan>
          </text>
          <text fontSize={12} systemLanguage="es" id="trsvg944">
            <tspan id="trsvg401">{"Fantasma"}</tspan>
          </text>
          <text fontSize={12} systemLanguage="fi" id="trsvg945">
            <tspan id="trsvg402">{"Kummitus"}</tspan>
          </text>
          <text fontSize={12} systemLanguage="no" id="trsvg946">
            <tspan id="trsvg403">{"Sp\xF8kelse"}</tspan>
          </text>
          <text fontSize={12} systemLanguage="ru" id="trsvg948">
            <tspan id="trsvg405">
              {"\u041F\u0440\u0438\u0432\u0438\u0434\u0435\u043D\u0438\u0435"}
            </tspan>
          </text>
          <text systemLanguage="cs" id="trsvg949">
            <tspan id="trsvg406">{"Duchov\xFD"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg950">
            <tspan id="trsvg407">{"Geist"}</tspan>
          </text>
          <text systemLanguage="en" id="trsvg951">
            <tspan id="trsvg408">{"Ghost"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg952">
            <tspan id="trsvg409">{"Spectre"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg953">
            <tspan id="trsvg410">{"\u05E8\u05D5\u05D7"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg954">
            <tspan id="trsvg411">{"\u0918\u094B\u0938\u094D\u091F"}</tspan>
          </text>
          <text systemLanguage="hu" id="trsvg955">
            <tspan id="trsvg412">{"Szellem"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg956">
            <tspan id="trsvg413">{"Hantu"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg957">
            <tspan id="trsvg414">{"Spettro"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg958">
            <tspan id="trsvg415">{"\u30B4\u30FC\u30B9\u30C8"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg959">
            <tspan id="trsvg416">{"\uACE0\uC2A4\uD2B8"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg960">
            <tspan id="trsvg417">{"Hantu"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg961">
            <tspan id="trsvg418">{"Geest"}</tspan>
          </text>
          <text systemLanguage="pl" id="trsvg962">
            <tspan id="trsvg419">{"Duch"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg963">
            <tspan id="trsvg420">{"Fantom\u0103"}</tspan>
          </text>
          <text systemLanguage="sv" id="trsvg964">
            <tspan id="trsvg421">{"Sp\xF6ke"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg965">
            <tspan id="trsvg422">{"\u0E1C\u0E35"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg966">
            <tspan id="trsvg423">{"Hayalet"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg967">
            <tspan id="trsvg424">{"Ma"}</tspan>
          </text>
          <text fontSize={12} systemLanguage="pt" id="trsvg947">
            <tspan id="trsvg404">{"Fantasma"}</tspan>
          </text>
          <text id="trsvg970">
            <tspan id="trsvg427">{"Ghost"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,413)">
        <switch id="dragon">
          <text systemLanguage="zh, zh-hk, zh-cn, zh-tw, zh-hant" id="trsvg997">
            <tspan id="trsvg454">{"\u9F8D"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg998">
            <tspan id="trsvg455">{"\u9F99"}</tspan>
          </text>
          <text systemLanguage="pt-br" id="trsvg990">
            <tspan id="trsvg447">{"Drag\xE3o"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg971">
            <tspan id="trsvg428">{"Dra\u010D\xED"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg972">
            <tspan id="trsvg429">{"Drage"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg973">
            <tspan id="trsvg430">{"Drache"}</tspan>
          </text>
          <text systemLanguage="el" id="trsvg974">
            <tspan id="trsvg431">
              {"\u0394\u03C1\u03AC\u03BA\u03BF\u03C5"}
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg975">
            <tspan id="trsvg432">{"Dragon"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg976">
            <tspan id="trsvg433">{"Drag\xF3n"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg977">
            <tspan id="trsvg434">{"Lohik\xE4\xE4rme"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg978">
            <tspan id="trsvg435">{"Dragon"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg979">
            <tspan id="trsvg436">{"\u05D3\u05E8\u05E7\u05D5\u05DF"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg980">
            <tspan id="trsvg437">
              {"\u0921\u094D\u0930\u0948\u0917\u0928"}
            </tspan>
          </text>
          <text systemLanguage="hu" id="trsvg981">
            <tspan id="trsvg438">{"S\xE1rk\xE1ny"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg982">
            <tspan id="trsvg439">{"Naga"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg983">
            <tspan id="trsvg440">{"Drago"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg984">
            <tspan id="trsvg441">{"\u30C9\u30E9\u30B4\u30F3"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg985">
            <tspan id="trsvg442">{"\uB4DC\uB798\uACE4"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg986">
            <tspan id="trsvg443">{"Naga"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg987">
            <tspan id="trsvg444">{"Draak"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg988">
            <tspan id="trsvg445">{"Drage"}</tspan>
          </text>
          <text systemLanguage="pl" id="trsvg989">
            <tspan id="trsvg446">{"Smok"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg991">
            <tspan id="trsvg448">{"Dragon"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg992">
            <tspan id="trsvg449">
              {"\u0414\u0440\u0430\u043A\u043E\u043D"}
            </tspan>
          </text>
          <text systemLanguage="sv" id="trsvg993">
            <tspan id="trsvg450">{"Drake"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg994">
            <tspan id="trsvg451">{"\u0E21\u0E31\u0E07\u0E01\u0E23"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg995">
            <tspan id="trsvg452">{"Ejderha"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg996">
            <tspan id="trsvg453">{"R\u1ED3ng"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg990">
            <tspan id="trsvg447">{"Drag\xE3o"}</tspan>
          </text>
          <text id="trsvg999">
            <tspan id="trsvg456">{"Dragon"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,435)">
        <switch id="dark">
          <text systemLanguage="pt-br" id="trsvg1020">
            <tspan id="trsvg477">{"Sombrio"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg1028">
            <tspan id="trsvg485">{"\u6076"}</tspan>
          </text>
          <text systemLanguage="zh-hk" id="trsvg1027">
            <tspan id="trsvg484">{"\u60E1"}</tspan>
          </text>
          <text systemLanguage="zh-cn" id="trsvg1027">
            <tspan id="trsvg484">{"\u60E1"}</tspan>
          </text>
          <text systemLanguage="zh-tw" id="trsvg1027">
            <tspan id="trsvg484">{"\u60E1"}</tspan>
          </text>
          <text systemLanguage="zh-hant" id="trsvg1027">
            <tspan id="trsvg484">{"\u60E1"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg1000">
            <tspan id="trsvg457">{"Temn\xFD"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg1001">
            <tspan id="trsvg458">{"M\xF8rke"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg1002">
            <tspan id="trsvg459">{"Unlicht"}</tspan>
          </text>
          <text systemLanguage="el" fontSize={12} id="trsvg1003">
            <tspan id="trsvg460">
              {"\u03A3\u03BA\u03BF\u03C4\u03B1\u03B4\u03B9\u03BF\u03CD"}
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg1004">
            <tspan id="trsvg461">{"Dark"}</tspan>
          </text>
          <text systemLanguage="es" fontSize={12} id="trsvg1005">
            <tspan id="trsvg462">{"Siniestro"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg1006">
            <tspan id="trsvg463">{"Pimeys"}</tspan>
          </text>
          <text systemLanguage="fr" fontSize={12} id="trsvg1007">
            <tspan id="trsvg464">{"T\xE9n\xE8bres"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg1008">
            <tspan id="trsvg465">{"\u05D0\u05D5\u05E4\u05DC"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg1009">
            <tspan id="trsvg466">{"\u0921\u093E\u0930\u094D\u0915"}</tspan>
          </text>
          <text systemLanguage="hu" id="trsvg1010">
            <tspan id="trsvg467">{"S\xF6t\xE9t"}</tspan>
          </text>
          <text systemLanguage="id" fontSize={12} id="trsvg1011">
            <tspan id="trsvg468">{"Kegelapan"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg1012">
            <tspan id="trsvg469">{"Buio"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg1013">
            <tspan id="trsvg470">{"\u3042\u304F"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg1014">
            <tspan id="trsvg471">{"\uC545"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg1015">
            <tspan id="trsvg472">{"Gelap"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg1016">
            <tspan id="trsvg473">{"Duister"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg1017">
            <tspan id="trsvg474">{"M\xF8rk"}</tspan>
          </text>
          <text systemLanguage="pl" id="trsvg1018">
            <tspan id="trsvg475">{"Mroczny"}</tspan>
          </text>
          <text systemLanguage="pt" fontSize={12} id="trsvg1019">
            <tspan id="trsvg476">{"Escurid\xE3o"}</tspan>
          </text>
          <text systemLanguage="ro" fontSize={12} id="trsvg1021">
            <tspan id="trsvg478">{"\xCEntuneric"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg1022">
            <tspan id="trsvg479">
              {"\u0422\u0435\u043C\u043D\u043E\u0442\u0430"}
            </tspan>
          </text>
          <text systemLanguage="sv" id="trsvg1023">
            <tspan id="trsvg480">{"M\xF6rker"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg1024">
            <tspan id="trsvg481">{"\u0E21\u0E37\u0E14"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg1025">
            <tspan id="trsvg482">{"Karanl\u0131k"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg1026">
            <tspan id="trsvg483">{"B\xF3ng t\u1ED1i"}</tspan>
          </text>
          <text systemLanguage="zh" id="trsvg1027">
            <tspan id="trsvg484">{"\u60E1"}</tspan>
          </text>
          <text id="trsvg1029">
            <tspan id="trsvg486">{"Dark"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,457)">
        <switch id="steel">
          <text
            systemLanguage="zh, zh-hk, zh-cn, zh-tw, zh-hant"
            id="trsvg1056"
          >
            <tspan id="trsvg513">{"\u92FC"}</tspan>
          </text>
          <text systemLanguage="zh-hans" id="trsvg1057">
            <tspan id="trsvg514">{"\u94A2"}</tspan>
          </text>
          <text systemLanguage="pt-br" id="trsvg1049">
            <tspan id="trsvg506">{"A\xE7o"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg1030">
            <tspan id="trsvg487">{"Ocelov\xFD"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg1031">
            <tspan id="trsvg488">{"St\xE5l"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg1032">
            <tspan id="trsvg489">{"Stahl"}</tspan>
          </text>
          <text systemLanguage="el" fontSize={13} id="trsvg1033">
            <tspan id="trsvg490">
              {"\u039C\u03B5\u03C4\u03AC\u03BB\u03BB\u03BF\u03C5"}
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg1034">
            <tspan id="trsvg491">{"Steel"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg1035">
            <tspan id="trsvg492">{"Acero"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg1036">
            <tspan id="trsvg493">{"Ter\xE4s"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg1037">
            <tspan id="trsvg494">{"Acier"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg1038">
            <tspan id="trsvg495">{"\u05E4\u05DC\u05D3\u05D4"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg1039">
            <tspan id="trsvg496">{"\u0938\u094D\u091F\u0940\u0932"}</tspan>
          </text>
          <text systemLanguage="hu" id="trsvg1040">
            <tspan id="trsvg497">{"Ac\xE9l"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg1041">
            <tspan id="trsvg498">{"Logam"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg1042">
            <tspan id="trsvg499">{"Acciaio"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg1043">
            <tspan id="trsvg500">{"\u306F\u304C\u306D"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg1044">
            <tspan id="trsvg501">{"\uAC15\uCCA0"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg1045">
            <tspan id="trsvg502">{"Besi"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg1046">
            <tspan id="trsvg503">{"Staal"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg1047">
            <tspan id="trsvg504">{"St\xE5l"}</tspan>
          </text>
          <text systemLanguage="pl" id="trsvg1048">
            <tspan id="trsvg505">{"Stalowy"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg1050">
            <tspan id="trsvg507">{"O\u021Bel"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg1051">
            <tspan id="trsvg508">{"\u0421\u0442\u0430\u043B\u044C"}</tspan>
          </text>
          <text systemLanguage="sv" id="trsvg1052">
            <tspan id="trsvg509">{"St\xE5l"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg1053">
            <tspan id="trsvg510">{"\u0E42\u0E25\u0E2B\u0E30"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg1054">
            <tspan id="trsvg511">{"\xC7elik"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg1055">
            <tspan id="trsvg512">{"Th\xE9p"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg1049">
            <tspan id="trsvg506">{"A\xE7o"}</tspan>
          </text>
          <text id="trsvg1058">
            <tspan id="trsvg515">{"Steel"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="translate(79,479)">
        <switch id="fairy">
          <text
            systemLanguage="zh, zh-hk, zh-cn, zh-tw, zh-hant, zh-hans"
            id="trsvg1085"
          >
            <tspan id="trsvg542">{"\u5996\u7CBE"}</tspan>
          </text>
          <text systemLanguage="pt-br" id="trsvg1078">
            <tspan id="trsvg535">{"Fada"}</tspan>
          </text>
          <text systemLanguage="cs" id="trsvg1059">
            <tspan id="trsvg516">{"V\xEDl\xED"}</tspan>
          </text>
          <text systemLanguage="da" id="trsvg1060">
            <tspan id="trsvg517">{"Fe"}</tspan>
          </text>
          <text systemLanguage="de" id="trsvg1061">
            <tspan id="trsvg518">{"Fee"}</tspan>
          </text>
          <text systemLanguage="el" id="trsvg1062">
            <tspan id="trsvg519">
              {"\u039D\u03B5\u03C1\u03AC\u03B9\u03B4\u03B1"}
            </tspan>
          </text>
          <text systemLanguage="en" id="trsvg1063">
            <tspan id="trsvg520">{"Fairy"}</tspan>
          </text>
          <text systemLanguage="es" id="trsvg1064">
            <tspan id="trsvg521">{"Hada"}</tspan>
          </text>
          <text systemLanguage="fi" id="trsvg1065">
            <tspan id="trsvg522">{"Keiju"}</tspan>
          </text>
          <text systemLanguage="fr" id="trsvg1066">
            <tspan id="trsvg523">{"F\xE9e"}</tspan>
          </text>
          <text systemLanguage="he" id="trsvg1067">
            <tspan id="trsvg524">{"\u05E4\u05D9\u05D4"}</tspan>
          </text>
          <text systemLanguage="hi" id="trsvg1068">
            <tspan id="trsvg525">{"\u092B\u093C\u0947\u0930\u0940"}</tspan>
          </text>
          <text systemLanguage="hu" id="trsvg1069">
            <tspan id="trsvg526">{"T\xFCnd\xE9r"}</tspan>
          </text>
          <text systemLanguage="id" id="trsvg1070">
            <tspan id="trsvg527">{"Peri"}</tspan>
          </text>
          <text systemLanguage="it" id="trsvg1071">
            <tspan id="trsvg528">{"Folletto"}</tspan>
          </text>
          <text systemLanguage="ja" id="trsvg1072">
            <tspan id="trsvg529">{"\u30D5\u30A7\u30A2\u30EA\u30FC"}</tspan>
          </text>
          <text systemLanguage="ko" id="trsvg1073">
            <tspan id="trsvg530">{"\uD398\uC5B4\uB9AC"}</tspan>
          </text>
          <text systemLanguage="ms" id="trsvg1074">
            <tspan id="trsvg531">{"Pari"}</tspan>
          </text>
          <text systemLanguage="nl" id="trsvg1075">
            <tspan id="trsvg532">{"Fairy"}</tspan>
          </text>
          <text systemLanguage="no" id="trsvg1076">
            <tspan id="trsvg533">{"Fe"}</tspan>
          </text>
          <text systemLanguage="pl" fontSize={13} id="trsvg1077">
            <tspan id="trsvg534">{"Ba\u015Bniowy"}</tspan>
          </text>
          <text systemLanguage="ro" id="trsvg1079">
            <tspan id="trsvg536">{"Z\xE2n\u0103"}</tspan>
          </text>
          <text systemLanguage="ru" id="trsvg1080">
            <tspan id="trsvg537">{"\u0424\u0435\u044F"}</tspan>
          </text>
          <text systemLanguage="sv" id="trsvg1081">
            <tspan id="trsvg538">{"Fe"}</tspan>
          </text>
          <text systemLanguage="th" id="trsvg1082">
            <tspan id="trsvg539">{"\u0E41\u0E1F\u0E23\u0E35\u0E48"}</tspan>
          </text>
          <text systemLanguage="tr" id="trsvg1083">
            <tspan id="trsvg540">{"Peri"}</tspan>
          </text>
          <text systemLanguage="vi" id="trsvg1084">
            <tspan id="trsvg541">{"Ti\xEAn"}</tspan>
          </text>
          <text systemLanguage="pt" id="trsvg1078">
            <tspan id="trsvg535">{"Fada"}</tspan>
          </text>
          <text id="trsvg1086">
            <tspan id="trsvg543">{"Fairy"}</tspan>
          </text>
        </switch>
      </g>
      <g transform="rotate(90)">
        <use xlinkHref="#normal" transform="translate(79,-97)" />
        <use xlinkHref="#fire" transform="translate(79,-119)" />
        <use xlinkHref="#water" transform="translate(79,-141)" />
        <use xlinkHref="#grass" transform="translate(79,-163)" />
        <g fill="#000">
          <use xlinkHref="#electric" transform="translate(79,-185)" />
          <use xlinkHref="#ice" transform="translate(79,-207)" />
        </g>
        <use xlinkHref="#fighting" transform="translate(79,-229)" />
        <use xlinkHref="#poison" transform="translate(79,-251)" />
        <use xlinkHref="#ground" transform="translate(79,-273)" />
        <use xlinkHref="#flying" transform="translate(79,-295)" />
        <use xlinkHref="#psychic" transform="translate(79,-317)" />
        <use xlinkHref="#bug" transform="translate(79,-339)" />
        <use xlinkHref="#rock" transform="translate(79,-361)" />
        <use xlinkHref="#ghost" transform="translate(79,-383)" />
        <use xlinkHref="#dragon" transform="translate(79,-405)" />
        <use xlinkHref="#dark" transform="translate(79,-427)" />
        <use xlinkHref="#steel" transform="translate(79,-449)" />
        <use xlinkHref="#fairy" transform="translate(79,-471)" />
      </g>
    </g>
    <rect x={90} y={90} height={396} width={396} fill="url(#g)" stroke="#000">
      <title>{"1\xD7"}</title>
    </rect>
    <use xlinkHref="#d" y={132} />
    <use xlinkHref="#e" y={286} />
    <use xlinkHref="#f" x={22} y={22} />
    <use xlinkHref="#d" x={22} y={44} />
    <use xlinkHref="#f" x={22} y={66} />
    <use xlinkHref="#f" x={22} y={110} />
    <use xlinkHref="#d" x={22} y={176} />
    <use xlinkHref="#f" x={22} y={242} />
    <use xlinkHref="#d" x={22} y={264} />
    <use xlinkHref="#f" x={22} y={352} />
    <use xlinkHref="#f" x={22} y={374} />
    <use xlinkHref="#f" x={44} y={22} />
    <use xlinkHref="#f" x={44} y={44} />
    <use xlinkHref="#d" x={44} y={66} />
    <use xlinkHref="#d" x={44} y={88} />
    <use xlinkHref="#f" x={44} y={110} />
    <use xlinkHref="#f" x={44} y={352} />
    <use xlinkHref="#d" x={66} y={22} />
    <use xlinkHref="#f" x={66} y={44} />
    <use xlinkHref="#f" x={66} y={66} />
    <use xlinkHref="#f" x={66} y={88} />
    <use xlinkHref="#d" x={66} y={110} />
    <use xlinkHref="#d" x={66} y={154} />
    <use xlinkHref="#d" x={66} y={198} />
    <use xlinkHref="#f" x={66} y={176} />
    <use xlinkHref="#d" x={66} y={242} />
    <use xlinkHref="#f" x={88} y={88} />
    <use xlinkHref="#f" x={110} y={110} />
    <use xlinkHref="#d" x={88} y={176} />
    <use xlinkHref="#f" x={88} y={198} />
    <use xlinkHref="#f" x={88} y={352} />
    <use xlinkHref="#d" x={110} y={22} />
    <use xlinkHref="#d" x={110} y={132} />
    <use xlinkHref="#d" x={110} y={264} />
    <use xlinkHref="#d" x={110} y={352} />
    <use xlinkHref="#d" x={132} y={374} />
    <use xlinkHref="#f" x={132} y={330} />
    <use xlinkHref="#f" x={132} y={264} />
    <use xlinkHref="#f" x={132} y={242} />
    <use xlinkHref="#d" x={132} y={220} />
    <use xlinkHref="#d" x={132} y={198} />
    <use xlinkHref="#f" x={154} y={66} />
    <use xlinkHref="#f" x={154} y={132} />
    <use xlinkHref="#f" x={154} y={154} />
    <use xlinkHref="#d" x={154} y={176} />
    <use xlinkHref="#d" x={154} y={220} />
    <use xlinkHref="#f" x={154} y={242} />
    <use xlinkHref="#f" x={154} y={374} />
    <use xlinkHref="#e" x={176} y={88} />
    <use xlinkHref="#d" x={176} y={66} />
    <use xlinkHref="#d" x={176} y={44} />
    <use xlinkHref="#d" x={176} y={110} />
    <use xlinkHref="#f" x={176} y={154} />
    <use xlinkHref="#f" x={176} y={264} />
    <use xlinkHref="#f" x={198} y={242} />
    <use xlinkHref="#d" x={198} y={264} />
    <use xlinkHref="#e" x={198} y={176} />
    <use xlinkHref="#f" x={198} y={132} />
    <use xlinkHref="#d" x={198} y={110} />
    <use xlinkHref="#d" x={198} y={88} />
    <use xlinkHref="#f" x={198} y={66} />
    <use xlinkHref="#f" x={220} y={132} />
    <use xlinkHref="#d" x={220} y={330} />
    <use xlinkHref="#d" x={220} y={286} />
    <use xlinkHref="#d" x={220} y={242} />
    <use xlinkHref="#f" x={220} y={220} />
    <use xlinkHref="#d" x={242} y={22} />
    <use xlinkHref="#d" x={242} y={198} />
    <use xlinkHref="#d" x={242} y={264} />
    <use xlinkHref="#f" x={242} y={176} />
    <use xlinkHref="#f" x={242} y={132} />
    <use xlinkHref="#f" x={242} y={66} />
    <use xlinkHref="#f" x={264} />
    <use xlinkHref="#f" x={264} y={22} />
    <use xlinkHref="#d" x={264} y={44} />
    <use xlinkHref="#d" x={264} y={66} />
    <use xlinkHref="#d" x={264} y={132} />
    <use xlinkHref="#d" x={264} y={176} />
    <use xlinkHref="#f" x={264} y={154} />
    <use xlinkHref="#f" x={264} y={198} />
    <use xlinkHref="#d" x={264} y={352} />
    <use xlinkHref="#e" x={286} />
    <use xlinkHref="#e" x={286} y={132} />
    <use xlinkHref="#f" x={286} y={154} />
    <use xlinkHref="#f" x={286} y={242} />
    <use xlinkHref="#d" x={286} y={330} />
    <use xlinkHref="#d" x={286} y={286} />
    <use xlinkHref="#f" x={308} y={22} />
    <use xlinkHref="#f" x={308} y={44} />
    <use xlinkHref="#f" x={308} y={66} />
    <use xlinkHref="#f" x={308} y={88} />
    <use xlinkHref="#d" x={308} y={110} />
    <use xlinkHref="#d" x={308} y={374} />
    <use xlinkHref="#d" x={308} y={308} />
    <use xlinkHref="#d" x={330} y={132} />
    <use xlinkHref="#e" x={330} y={220} />
    <use xlinkHref="#d" x={330} y={242} />
    <use xlinkHref="#f" x={330} y={286} />
    <use xlinkHref="#f" x={330} y={330} />
    <use xlinkHref="#d" x={330} y={374} />
    <use xlinkHref="#f" x={352} />
    <use xlinkHref="#d" x={352} y={22} />
    <use xlinkHref="#f" x={352} y={66} />
    <use xlinkHref="#f" x={352} y={110} />
    <use xlinkHref="#d" x={352} y={132} />
    <use xlinkHref="#e" x={352} y={154} />
    <use xlinkHref="#d" x={352} y={176} />
    <use xlinkHref="#f" x={352} y={198} />
    <use xlinkHref="#f" x={352} y={220} />
    <use xlinkHref="#f" x={352} y={242} />
    <use xlinkHref="#f" x={352} y={308} />
    <use xlinkHref="#f" x={352} y={264} />
    <use xlinkHref="#f" x={352} y={352} />
    <use xlinkHref="#f" x={352} y={374} />
    <use xlinkHref="#d" x={374} y={352} />
    <use xlinkHref="#f" x={374} y={330} />
    <use xlinkHref="#e" x={374} y={308} />
    <use xlinkHref="#f" x={374} y={242} />
    <use xlinkHref="#d" x={374} y={154} />
    <use xlinkHref="#f" x={374} y={132} />
  </svg>
);
