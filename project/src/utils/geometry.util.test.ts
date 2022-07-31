import {
  decodePolyline,
  getPointArrayBounds,
  getEncodedPolylineBounds,
  getEncodedPolylineCenter,
} from './geometry.util';

describe(`${decodePolyline.name}`, () => {
  const encodedPolyline =
    'h{ibFeyni`@tIfIbBxFGfDkIbEaDjKaAtJiMfr@m`@p`A_CnBmQtEmL|HcKvJuTlDeKfDaSgAqGtBeDpEmFlPgPlXiDxQePtRuO`GwLuFeOG{PvMqQF{RzQuCjAkcAoQcE@oFpEwChFuHxYDvGuCgHqJ{GkESsB`BoAhG`B`MD`FiCbGom@pG{G|EeMrFoDfI{CxLeCOcIoFyJuDiDv@YxA`@fFi@fCeGtCgNhLx@pJ~@xa@rCtNt@jJsDjBkUXqGfJo@bGt@pJHpUkAbCkMjHk@bCBzEuBdG_BxJtAbJfAd]nMzLnAdDr@~IaMaAqM{DeOjIuHvAgIpPcNhAmIcAiJvDmXrOg@|ErDvMo@dEgCnBqEq@cKmPcBiAaBLcCjCuEpNgAlQwEvDwG[mId@yV_UyL_P}BbAuBzHeHMcElO_BXiNmC_B`FYlFp@~BtAdAP`I}@xB}BRgAnCiCtA{JOuAx@GjJbB~HQbC_DCaFuBkElCiFoEqArAq@lFh@pHoFdORfHfBvGC`BcFbE{FjAmBpEj@hH~D`Pe@~IoIxH{B`EgJjIgD`FQnEvCjHK|AsRkGwLnDkDIcFiFsHiDiCkFiBqAeH`@sEjD_EV}Mk^{AaLFiK{BoGh@qKY_EkLsVyCqKR{RpCcG?yBeIkRgMiFmCaPmBsSl@{KIiSdGdB~GH~By@jEkErEiA~GkLzQ_e@~FiIbCgA`FvAnGyASkShAeKpGq[lHG`\\pK|Rl]pBtApPnE`JyBnDBpQ`Fbn@|i@`R|XlChIjA|Nv@~BfPhRxQlOvIs@tEb@hDuAvA{DZ{M~EoOrBiCtD?bKtP|BpAhC@vBmBh@uCc@eEmCeILeCdAsBz_@kSxC[bGfAdKeB`ArAwC~R|@fHlHdYpE~JhDfC`FfAzHg@lHyHnBo@nJrF|OdF|TnAlOcExGzDrBF|SiHnWQxDmAlBaHkCqPl@gGpD{CjNeAfP_XxMeGxEcG`CaIqAwOZoHxI_k@oAaTjBwFnKgH~@aDkAcTcCwNToCxAaBjI{BrPsAtR}HbCaCjHsRlJpBrJbKvJ|YxEvEdCT`EiBfIRxNjJzE`HlGi@fCtAbCg@nQrI|BiCrFw@dOsLdFyI|IqCbC}KlO_ExOoKfGm@l@oAdA_NsC}SGsOdDiCnFxBrPmCxPo\\lDv@vKqFzDY|C_CxPfFdK{ChEbA`DlH~DlCnAk@zB{ExBe@nB`A~HpKpJc@nHzBvL}@bAyDg@yKzBaMvAOtDhCtIo@pCw@tE_HtQuAaC{UEkHuNiT{Ouk@mCuEoOeLuVyj@uOsX_@mG|FOrf@aRfHur@xIwJoMsXgW{d@mNkKcGuHxCsWgEaF';

  const expetedPathJSON =
    '[[-37.24741,174.73443],[-37.24912,174.73279],[-37.24962,174.73154],[-37.24958,174.7307],[-37.24792,174.72972],[-37.24711,174.72774],[-37.24678,174.72587],[-37.24449,174.71767],[-37.23914,174.70718],[-37.2385,174.70662],[-37.23555,174.70555],[-37.2334,174.70396],[-37.23146,174.70208],[-37.22799,174.70121],[-37.22604,174.70037],[-37.22283,174.70073],[-37.22146,174.70014],[-37.22063,174.69909],[-37.21944,174.6963],[-37.21668,174.69223],[-37.21583,174.68922],[-37.21308,174.68607],[-37.21041,174.68478],[-37.20821,174.68601],[-37.20562,174.68605],[-37.20276,174.68369],[-37.19979,174.68365],[-37.19661,174.68063],[-37.19586,174.68025],[-37.18492,174.68321],[-37.18394,174.6832],[-37.18274,174.68215],[-37.18198,174.68098],[-37.18043,174.67669],[-37.18046,174.67529],[-37.17971,174.67677],[-37.17786,174.67819],[-37.17684,174.67829],[-37.17626,174.6778],[-37.17586,174.67647],[-37.17635,174.67422],[-37.17638,174.67309],[-37.17569,174.67179],[-37.16825,174.67042],[-37.16683,174.66931],[-37.16456,174.66809],[-37.16368,174.66645],[-37.1629,174.66424],[-37.16223,174.66432],[-37.16061,174.66552],[-37.15872,174.66643],[-37.15787,174.66615],[-37.15774,174.6657],[-37.15791,174.66454],[-37.1577,174.66386],[-37.15639,174.66311],[-37.15395,174.66098],[-37.15424,174.65913],[-37.15456,174.65356],[-37.1553,174.65105],[-37.15557,174.64923],[-37.15467,174.64869],[-37.15109,174.64856],[-37.14972,174.64676],[-37.14948,174.64546],[-37.14975,174.64361],[-37.1498,174.64],[-37.14942,174.63934],[-37.14712,174.63784],[-37.1469,174.63718],[-37.14692,174.63608],[-37.14633,174.63477],[-37.14585,174.63288],[-37.14628,174.6311],[-37.14664,174.62627],[-37.14896,174.62405],[-37.14936,174.62322],[-37.14962,174.62146],[-37.14737,174.62179],[-37.14504,174.62273],[-37.14245,174.62107],[-37.1409,174.62063],[-37.13926,174.61782],[-37.13684,174.61745],[-37.13517,174.61779],[-37.13336,174.61687],[-37.12929,174.61421],[-37.12909,174.6131],[-37.12999,174.61074],[-37.12975,174.60975],[-37.12907,174.60919],[-37.12802,174.60944],[-37.12608,174.61223],[-37.12558,174.6126],[-37.12509,174.61253],[-37.12443,174.61183],[-37.12336,174.60934],[-37.123,174.60639],[-37.12192,174.60547],[-37.12052,174.60561],[-37.11885,174.60542],[-37.11504,174.60894],[-37.11283,174.61166],[-37.1122,174.61132],[-37.11161,174.60974],[-37.11014,174.60981],[-37.10916,174.60718],[-37.10868,174.60705],[-37.10623,174.60776],[-37.10575,174.60663],[-37.10562,174.60544],[-37.10587,174.6048],[-37.1063,174.60445],[-37.10639,174.60284],[-37.10608,174.60223],[-37.10545,174.60213],[-37.10509,174.60141],[-37.1044,174.60098],[-37.1025,174.60106],[-37.10207,174.60077],[-37.10203,174.59895],[-37.10253,174.59735],[-37.10244,174.59669],[-37.10164,174.59671],[-37.10051,174.5973],[-37.09949,174.59659],[-37.09832,174.59763],[-37.09791,174.59721],[-37.09766,174.59602],[-37.09787,174.59449],[-37.09667,174.5919],[-37.09677,174.59042],[-37.09729,174.58902],[-37.09727,174.58853],[-37.09613,174.58755],[-37.09487,174.58717],[-37.09432,174.58612],[-37.09454,174.58463],[-37.0955,174.5819],[-37.09531,174.58014],[-37.09363,174.57857],[-37.09301,174.5776],[-37.09121,174.57594],[-37.09037,174.57481],[-37.09028,174.57377],[-37.09104,174.57227],[-37.09098,174.5718],[-37.08784,174.57314],[-37.08564,174.57226],[-37.08478,174.57231],[-37.08364,174.57348],[-37.0821,174.57433],[-37.08141,174.57551],[-37.08088,174.57592],[-37.07941,174.57575],[-37.07835,174.57489],[-37.07739,174.57477],[-37.075,174.57979],[-37.07454,174.58188],[-37.07458,174.58385],[-37.07396,174.58521],[-37.07417,174.58722],[-37.07404,174.58818],[-37.0719,174.59196],[-37.07113,174.59397],[-37.07123,174.59715],[-37.07196,174.59845],[-37.07196,174.59906],[-37.07033,174.60216],[-37.06805,174.60333],[-37.06734,174.60606],[-37.06679,174.60936],[-37.06702,174.61142],[-37.06697,174.61467],[-37.06828,174.61416],[-37.06972,174.61411],[-37.07036,174.6144],[-37.07138,174.61542],[-37.07244,174.61579],[-37.07388,174.61793],[-37.0769,174.62401],[-37.07818,174.62566],[-37.07884,174.62602],[-37.07997,174.62558],[-37.08133,174.62603],[-37.08123,174.62929],[-37.0816,174.63124],[-37.08297,174.63581],[-37.08448,174.63585],[-37.08913,174.63384],[-37.09232,174.62897],[-37.09289,174.62854],[-37.0957,174.6275],[-37.09747,174.62811],[-37.09835,174.62809],[-37.10132,174.62696],[-37.10886,174.62009],[-37.11191,174.61594],[-37.11262,174.61429],[-37.113,174.61174],[-37.11328,174.6111],[-37.11604,174.60801],[-37.11905,174.60538],[-37.12077,174.60564],[-37.12184,174.60546],[-37.12269,174.60589],[-37.12313,174.60683],[-37.12327,174.60921],[-37.12439,174.61185],[-37.12497,174.61254],[-37.12588,174.61254],[-37.12782,174.60971],[-37.12845,174.6093],[-37.12914,174.60929],[-37.12974,174.60984],[-37.12995,174.61059],[-37.12977,174.61158],[-37.12906,174.61321],[-37.12913,174.61388],[-37.12948,174.61446],[-37.13474,174.61772],[-37.13551,174.61786],[-37.13681,174.6175],[-37.13876,174.61801],[-37.13909,174.61759],[-37.13833,174.61439],[-37.13864,174.61291],[-37.14015,174.60872],[-37.1412,174.6068],[-37.14205,174.60612],[-37.14318,174.60576],[-37.14476,174.60596],[-37.14627,174.60753],[-37.14683,174.60777],[-37.14867,174.60655],[-37.15138,174.6054],[-37.15489,174.605],[-37.15752,174.60598],[-37.15893,174.60504],[-37.15951,174.605],[-37.16286,174.60649],[-37.16678,174.60658],[-37.16771,174.60697],[-37.16826,174.60842],[-37.16756,174.61123],[-37.16779,174.61255],[-37.16868,174.61333],[-37.17114,174.61368],[-37.1739,174.61768],[-37.17627,174.61899],[-37.17736,174.62029],[-37.17801,174.6219],[-37.1776,174.62458],[-37.17774,174.6261],[-37.17947,174.63314],[-37.17907,174.63651],[-37.17961,174.63775],[-37.18161,174.63923],[-37.18193,174.64004],[-37.18155,174.64342],[-37.18089,174.64594],[-37.181,174.64666],[-37.18145,174.64715],[-37.18311,174.64777],[-37.18593,174.64819],[-37.18908,174.64978],[-37.18974,174.65043],[-37.19124,174.65357],[-37.19307,174.653],[-37.19493,174.65106],[-37.19681,174.64675],[-37.1979,174.64567],[-37.19857,174.64556],[-37.19954,174.64609],[-37.20118,174.64599],[-37.20371,174.64417],[-37.20481,174.64272],[-37.20616,174.64293],[-37.20684,174.6425],[-37.2075,174.6427],[-37.21046,174.641],[-37.21109,174.64169],[-37.21231,174.64197],[-37.2149,174.64415],[-37.21605,174.64588],[-37.2178,174.64661],[-37.21846,174.64868],[-37.22109,174.64964],[-37.22378,174.65164],[-37.2251,174.65187],[-37.22533,174.65227],[-37.22568,174.65467],[-37.22494,174.65802],[-37.2249,174.66068],[-37.22573,174.66137],[-37.22693,174.66076],[-37.22975,174.66147],[-37.2326,174.66619],[-37.23347,174.66591],[-37.23551,174.66712],[-37.23645,174.66725],[-37.23724,174.66789],[-37.24009,174.66673],[-37.24204,174.66751],[-37.24305,174.66717],[-37.24386,174.66566],[-37.24482,174.66495],[-37.24522,174.66517],[-37.24584,174.66627],[-37.24645,174.66646],[-37.24701,174.66613],[-37.24861,174.66412],[-37.25046,174.6643],[-37.25198,174.66368],[-37.25418,174.66399],[-37.25452,174.66492],[-37.25432,174.66697],[-37.25494,174.66922],[-37.25538,174.6693],[-37.25629,174.66861],[-37.258,174.66885],[-37.25873,174.66913],[-37.2598,174.67057],[-37.26279,174.671],[-37.26214,174.67466],[-37.26211,174.67616],[-37.2596,174.67957],[-37.2569,174.68672],[-37.25619,174.68779],[-37.25355,174.6899],[-37.24976,174.69691],[-37.24709,174.70101],[-37.24693,174.70236],[-37.2482,174.70244],[-37.25454,174.70549],[-37.25602,174.71376],[-37.25775,174.71564],[-37.25543,174.71974],[-37.25155,174.7258],[-37.24908,174.72778],[-37.24778,174.72933],[-37.24855,174.73327],[-37.24755,174.7344]]';

  const jsonBounds =
    '{"_southWest":{"lat":-37.26279,"lng":174.5718},"_northEast":{"lat":-37.06679,"lng":174.73443}}';

  const jsonPolylineCenter = '{"lat":-37.164789999999996,"lng":174.653115}';
  const polylineCenter = JSON.parse(jsonPolylineCenter);

  const bounds = JSON.parse(jsonBounds);

  const path = JSON.parse(expetedPathJSON);

  it('should decodePolyline correctly', () => {
    const resultPath = decodePolyline(encodedPolyline);
    expect(resultPath).toEqual(path);
  });

  it('should getPointArrayBounds correctly', () => {
    const resultBounds = getPointArrayBounds(path);
    expect(resultBounds).toEqual(bounds);
  });

  it('should getEncodedPolylineBounds correctly', () => {
    const resultBounds = getEncodedPolylineBounds(encodedPolyline);
    expect(resultBounds).toEqual(bounds);
  });

  it('should getEncodedPolylineCenter correctly', () => {
    const resultCenter = getEncodedPolylineCenter(encodedPolyline);
    expect(resultCenter).toEqual(polylineCenter);
  });
});