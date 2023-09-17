<template>
    <div
    style="background-color: silver;padding-top: 150px;"
      class="row "
    >
      <div>
       <dummycopy @openGallery="openGallery" :json="json"/>
        <LightBox
          ref="lightbox"
          :media="json"
          :show-caption="true"
          :show-light-box="false"
          :site-loading="siteLoading"
        />
      </div>
    </div>
  </template>
  
  <script>
  import LightBox from './components/LightBox'

import logo from '../assets/images/image2.jpg'
  import siteLoading from './siteloading.gif'
  import dummycopy from './dummycopy.vue'
  import {
    media,
    paragraphs,
  } from './dummy'
  
import image1 from '@/assets/images/image1.jpg'
import image2 from '@/assets/images/image2.jpg'
import image3 from '@/assets/images/image3.jpg'
import image4 from '@/assets/images/image4.jpg'
import image5 from '@/assets/images/image5.jpg'
import image6 from '@/assets/images/image6.jpg'
import image7 from '@/assets/images/image7.jpg'
import image8 from '@/assets/images/image8.jpg'
import image9 from '@/assets/images/image9.jpg'
import image10 from '@/assets/images/image10.jpg'
import image11 from '@/assets/images/image11.jpg'
import image12 from '@/assets/images/image12.jpg'
import image13 from '@/assets/images/image13.jpg'
import image14 from '@/assets/images/image14.jpg'
import image15 from '@/assets/images/image15.jpg'
import image16 from '@/assets/images/image16.jpg'
import image17 from '@/assets/images/image17.jpg'
import image18 from '@/assets/images/image18.jpg'
import image19 from '@/assets/images/image19.jpg'
import image20 from '@/assets/images/image20.jpg'
import image21 from '@/assets/images/image21.jpg'
import image22 from '@/assets/images/image22.jpg'
import image23 from '@/assets/images/image23.jpg'
import image24 from '@/assets/images/image24.jpg'
import image25 from '@/assets/images/image25.jpg'
import image26 from '@/assets/images/image26.jpg'
import image27 from '@/assets/images/image27.jpg'
import image28 from '@/assets/images/image28.jpg'
import image29 from '@/assets/images/image29.jpg'
import image30 from '@/assets/images/image30.jpg'
import image31 from '@/assets/images/image31.jpg'
import image32 from '@/assets/images/image32.jpg'
import image33 from '@/assets/images/image33.jpg'
import image34 from '@/assets/images/image34.jpg'
import image35 from '@/assets/images/image35.jpg'
import image36 from '@/assets/images/image36.jpg'
import image37 from '@/assets/images/image37.jpg'
import image38 from '@/assets/images/image38.jpg'
import image39 from '@/assets/images/image39.jpg'
import image40 from '@/assets/images/image40.jpg'
import image41 from '@/assets/images/image41.jpg'
import image42 from '@/assets/images/image42.jpg'
import image43 from '@/assets/images/image43.jpg'
import image44 from '@/assets/images/image44.jpg'
import image45 from '@/assets/images/image45.jpg'
import image46 from '@/assets/images/image46.jpg'
import image47 from '@/assets/images/image47.jpg'
import image48 from '@/assets/images/image48.jpg'
import image49 from '@/assets/images/image49.jpg'
import image50 from '@/assets/images/image50.jpg'
import image51 from '@/assets/images/image51.jpg'
import image52 from '@/assets/images/image52.jpg'
import image53 from '@/assets/images/image53.jpg'
import image54 from '@/assets/images/image54.jpg'
import image55 from '@/assets/images/image55.jpg'
import image56 from '@/assets/images/image56.jpg'
import image57 from '@/assets/images/image57.jpg'
import image58 from '@/assets/images/image58.jpg'
import image59 from '@/assets/images/image59.jpg'
import image60 from '@/assets/images/image60.jpg'
import image61 from '@/assets/images/image61.jpg'
import image62 from '@/assets/images/image62.jpg'
import image63 from '@/assets/images/image63.jpg'
import image64 from '@/assets/images/image64.jpg'
import image65 from '@/assets/images/image65.jpg'
import image66 from '@/assets/images/image66.jpg'
import image67 from '@/assets/images/image67.jpg'
import image68 from '@/assets/images/image68.jpg'
import image69 from '@/assets/images/image69.jpg'
import image70 from '@/assets/images/image70.jpg'
import image71 from '@/assets/images/image71.jpg'
import image72 from '@/assets/images/image72.jpg'
import image73 from '@/assets/images/image73.jpg'
import image74 from '@/assets/images/image74.jpg'
import image75 from '@/assets/images/image75.jpg'
import image76 from '@/assets/images/image76.jpg'
import image77 from '@/assets/images/image77.jpg'
import image78 from '@/assets/images/image78.jpg'
import image79 from '@/assets/images/image79.jpg'
import image80 from '@/assets/images/image80.jpg'
import image81 from '@/assets/images/image81.jpg'
import image82 from '@/assets/images/image82.jpg'
import image83 from '@/assets/images/image83.jpg'
import image84 from '@/assets/images/image84.jpg'
import image85 from '@/assets/images/image85.jpg'
import image86 from '@/assets/images/image86.jpg'
import image87 from '@/assets/images/image87.jpg'
import image88 from '@/assets/images/image88.jpg'
import image89 from '@/assets/images/image89.jpg'
import image90 from '@/assets/images/image90.jpg'
import image91 from '@/assets/images/image91.jpg'
import image92 from '@/assets/images/image92.jpg'
import image93 from '@/assets/images/image93.jpg'
import image94 from '@/assets/images/image94.jpg'
import image95 from '@/assets/images/image95.jpg'
import image96 from '@/assets/images/image96.jpg'
import image97 from '@/assets/images/image97.jpg'
import image98 from '@/assets/images/image98.jpg'
import image99 from '@/assets/images/image99.jpg'
import image100 from '@/assets/images/image100.jpg'
import image101 from '@/assets/images/image101.jpg'
import image102 from '@/assets/images/image102.jpg'
import image103 from '@/assets/images/image103.jpg'
import image104 from '@/assets/images/image104.jpg'
import image105 from '@/assets/images/image105.jpg'
import image106 from '@/assets/images/image106.jpg'
import image107 from '@/assets/images/image107.jpg'
import image108 from '@/assets/images/image108.jpg'
import image109 from '@/assets/images/image109.jpg'
import image110 from '@/assets/images/image110.jpg'
import image111 from '@/assets/images/image111.jpg'
import image112 from '@/assets/images/image112.jpg'
import image113 from '@/assets/images/image113.jpg'
import image114 from '@/assets/images/image114.jpg'
import image115 from '@/assets/images/image115.jpg'
import image116 from '@/assets/images/image116.jpg'
import image117 from '@/assets/images/image117.jpg'
import image118 from '@/assets/images/image118.jpg'
import image119 from '@/assets/images/image119.jpg'
import image120 from '@/assets/images/image120.jpg'
import image121 from '@/assets/images/image121.jpg'
import image122 from '@/assets/images/image122.jpg'
import image123 from '@/assets/images/image123.jpg'
import image124 from '@/assets/images/image124.jpg'
import image125 from '@/assets/images/image125.jpg'
import image126 from '@/assets/images/image126.jpg'
import image127 from '@/assets/images/image127.jpg'
import image128 from '@/assets/images/image128.jpg'
import image129 from '@/assets/images/image129.jpg'
import image130 from '@/assets/images/image130.jpg'
import image131 from '@/assets/images/image131.jpg'
import image132 from '@/assets/images/image132.jpg'
import image133 from '@/assets/images/image133.jpg'
import image134 from '@/assets/images/image134.jpg'
import image135 from '@/assets/images/image135.jpg'
import image136 from '@/assets/images/image136.jpg'
import image137 from '@/assets/images/image137.jpg'
import image138 from '@/assets/images/image138.jpg'
import image139 from '@/assets/images/image139.jpg'
import image140 from '@/assets/images/image140.jpg'
import image141 from '@/assets/images/image141.jpg'
import image142 from '@/assets/images/image142.jpg'
import image143 from '@/assets/images/image143.jpg'
import image144 from '@/assets/images/image144.jpg'
import image145 from '@/assets/images/image145.jpg'
import image146 from '@/assets/images/image146.jpg'
import image147 from '@/assets/images/image147.jpg'
import image148 from '@/assets/images/image148.jpg'
import image149 from '@/assets/images/image149.jpg'
import image150 from '@/assets/images/image150.jpg'
import image151 from '@/assets/images/image151.jpg'
import image152 from '@/assets/images/image152.jpg'
import image153 from '@/assets/images/image153.jpg'
import image154 from '@/assets/images/image154.jpg'
import image155 from '@/assets/images/image155.jpg'
import image156 from '@/assets/images/image156.jpg'
import image157 from '@/assets/images/image157.jpg'
import image158 from '@/assets/images/image158.jpg'
import image159 from '@/assets/images/image159.jpg'
import image160 from '@/assets/images/image160.jpg'
import image161 from '@/assets/images/image161.jpg'
import image162 from '@/assets/images/image162.jpg'
import image163 from '@/assets/images/image163.jpg'
import image164 from '@/assets/images/image164.jpg'
import image165 from '@/assets/images/image165.jpg'
import image166 from '@/assets/images/image166.jpg'
import image167 from '@/assets/images/image167.jpg'
import image168 from '@/assets/images/image168.jpg'
import image169 from '@/assets/images/image169.jpg'
import image170 from '@/assets/images/image170.jpg'
import image171 from '@/assets/images/image171.jpg'
import image172 from '@/assets/images/image172.jpg'
import image173 from '@/assets/images/image173.jpg'
import image174 from '@/assets/images/image174.jpg'
import image175 from '@/assets/images/image175.jpg'
import image176 from '@/assets/images/image176.jpg'
import image177 from '@/assets/images/image177.jpg'
import image178 from '@/assets/images/image178.jpg'
import image179 from '@/assets/images/image179.jpg'
import image180 from '@/assets/images/image180.jpg'
import image181 from '@/assets/images/image181.jpg'
import image182 from '@/assets/images/image182.jpg'
import image183 from '@/assets/images/image183.jpg'
import image184 from '@/assets/images/image184.jpg'
import image185 from '@/assets/images/image185.jpg'
import image186 from '@/assets/images/image186.jpg'
import image187 from '@/assets/images/image187.jpg'
import image188 from '@/assets/images/image188.jpg'
import image189 from '@/assets/images/image189.jpg'
import image190 from '@/assets/images/image190.jpg'
import image191 from '@/assets/images/image191.jpg'
import image192 from '@/assets/images/image192.jpg'
import image193 from '@/assets/images/image193.jpg'
import image194 from '@/assets/images/image194.jpg'
import image195 from '@/assets/images/image195.jpg'
import image196 from '@/assets/images/image196.jpg'
import image197 from '@/assets/images/image197.jpg'
import image198 from '@/assets/images/image198.jpg'
import image199 from '@/assets/images/image199.jpg'
import image200 from '@/assets/images/image200.jpg'
import image201 from '@/assets/images/image201.jpg'
import image202 from '@/assets/images/image202.jpg'
import image203 from '@/assets/images/image203.jpg'
import image204 from '@/assets/images/image204.jpg'
import image205 from '@/assets/images/image205.jpg'
import image206 from '@/assets/images/image206.jpg'
import image207 from '@/assets/images/image207.jpg'
import image208 from '@/assets/images/image208.jpg'
import image209 from '@/assets/images/image209.jpg'
import image210 from '@/assets/images/image210.jpg'
import image211 from '@/assets/images/image211.jpg'
import image212 from '@/assets/images/image212.jpg'
import image213 from '@/assets/images/image213.jpg'
import image214 from '@/assets/images/image214.jpg'
import image215 from '@/assets/images/image215.jpg'
import image216 from '@/assets/images/image216.jpg'
import image217 from '@/assets/images/image217.jpg'
import image218 from '@/assets/images/image218.jpg'
import image219 from '@/assets/images/image219.jpg'
import image220 from '@/assets/images/image220.jpg'
import image221 from '@/assets/images/image221.jpg'
import image222 from '@/assets/images/image222.jpg'
import image223 from '@/assets/images/image223.jpg'
import image224 from '@/assets/images/image224.jpg'
import image225 from '@/assets/images/image225.jpg'
import image226 from '@/assets/images/image226.jpg'
import image227 from '@/assets/images/image227.jpg'
import image228 from '@/assets/images/image228.jpg'
import image229 from '@/assets/images/image229.jpg'
import image230 from '@/assets/images/image230.jpg'
import image231 from '@/assets/images/image231.jpg'
import image232 from '@/assets/images/image232.jpg'
import image233 from '@/assets/images/image233.jpg'
import image234 from '@/assets/images/image234.jpg'
import image235 from '@/assets/images/image235.jpg'
import image236 from '@/assets/images/image236.jpg'
import image237 from '@/assets/images/image237.jpg'
import image238 from '@/assets/images/image238.jpg'
import image239 from '@/assets/images/image239.jpg'
import image240 from '@/assets/images/image240.jpg'
import image241 from '@/assets/images/image241.jpg'
import image242 from '@/assets/images/image242.jpg'
import image243 from '@/assets/images/image243.jpg'
import image244 from '@/assets/images/image244.jpg'
import image245 from '@/assets/images/image245.jpg'
import image246 from '@/assets/images/image246.jpg'
import image247 from '@/assets/images/image247.jpg'
import image248 from '@/assets/images/image248.jpg'
import image249 from '@/assets/images/image249.jpg'
import image250 from '@/assets/images/image250.jpg'
import image251 from '@/assets/images/image251.jpg'
import image252 from '@/assets/images/image252.jpg'
import image253 from '@/assets/images/image253.jpg'
import image254 from '@/assets/images/image254.jpg'
import image255 from '@/assets/images/image255.jpg'
import image256 from '@/assets/images/image256.jpg'
import image257 from '@/assets/images/image257.jpg'
import image258 from '@/assets/images/image258.jpg'
import image259 from '@/assets/images/image259.jpg'
import image260 from '@/assets/images/image260.jpg'
import image261 from '@/assets/images/image261.jpg'
import image262 from '@/assets/images/image262.jpg'
import image263 from '@/assets/images/image263.jpg'
import image264 from '@/assets/images/image264.jpg'
import image265 from '@/assets/images/image265.jpg'
import image266 from '@/assets/images/image266.jpg'
import image267 from '@/assets/images/image267.jpg'
import image268 from '@/assets/images/image268.jpg'
import image269 from '@/assets/images/image269.jpg'
import image270 from '@/assets/images/image270.jpg'
import image271 from '@/assets/images/image271.jpg'
import image272 from '@/assets/images/image272.jpg'
import image273 from '@/assets/images/image273.jpg'
import image274 from '@/assets/images/image274.jpg'
import image275 from '@/assets/images/image275.jpg'
import image276 from '@/assets/images/image276.jpg'
import image277 from '@/assets/images/image277.jpg'
import image278 from '@/assets/images/image278.jpg'
import image279 from '@/assets/images/image279.jpg'
import image280 from '@/assets/images/image280.jpg'
import image281 from '@/assets/images/image281.jpg'
import image282 from '@/assets/images/image282.jpg'
import image283 from '@/assets/images/image283.jpg'
import image284 from '@/assets/images/image284.jpg'
import image285 from '@/assets/images/image285.jpg'
import image286 from '@/assets/images/image286.jpg'
import image287 from '@/assets/images/image287.jpg'
import image288 from '@/assets/images/image288.jpg'
import image289 from '@/assets/images/image289.jpg'
import image290 from '@/assets/images/image290.jpg'
import image291 from '@/assets/images/image291.jpg'
import image292 from '@/assets/images/image292.jpg'
import image293 from '@/assets/images/image293.jpg'
import image294 from '@/assets/images/image294.jpg'
import image295 from '@/assets/images/image295.jpg'
import image296 from '@/assets/images/image296.jpg'
import image297 from '@/assets/images/image297.jpg'
import image298 from '@/assets/images/image298.jpg'
import image299 from '@/assets/images/image299.jpg'
import image300 from '@/assets/images/image300.jpg'
import image301 from '@/assets/images/image301.jpg'
import image302 from '@/assets/images/image302.jpg'
import image303 from '@/assets/images/image303.jpg'
import image304 from '@/assets/images/image304.jpg'
import image305 from '@/assets/images/image305.jpg'
import image306 from '@/assets/images/image306.jpg'
import image307 from '@/assets/images/image307.jpg'
import image308 from '@/assets/images/image308.jpg'
import image309 from '@/assets/images/image309.jpg'
import image310 from '@/assets/images/image310.jpg'
import image311 from '@/assets/images/image311.jpg'
import image312 from '@/assets/images/image312.jpg'
import image313 from '@/assets/images/image313.jpg'
import image314 from '@/assets/images/image314.jpg'
import image315 from '@/assets/images/image315.jpg'
import image316 from '@/assets/images/image316.jpg'
import image317 from '@/assets/images/image317.jpg'
import image318 from '@/assets/images/image318.jpg'
import image319 from '@/assets/images/image319.jpg'
import image320 from '@/assets/images/image320.jpg'
import image321 from '@/assets/images/image321.jpg'
import image322 from '@/assets/images/image322.jpg'
import image323 from '@/assets/images/image323.jpg'
import image324 from '@/assets/images/image324.jpg'
import image325 from '@/assets/images/image325.jpg'
import image326 from '@/assets/images/image326.jpg'
import image327 from '@/assets/images/image327.jpg'
import image328 from '@/assets/images/image328.jpg'
import image329 from '@/assets/images/image329.jpg'
import image330 from '@/assets/images/image330.jpg'
import image331 from '@/assets/images/image331.jpg'
import image332 from '@/assets/images/image332.jpg'
import image333 from '@/assets/images/image333.jpg'
import image334 from '@/assets/images/image334.jpg'
import image335 from '@/assets/images/image335.jpg'
import image336 from '@/assets/images/image336.jpg'
import image337 from '@/assets/images/image337.jpg'
import image338 from '@/assets/images/image338.jpg'
import image339 from '@/assets/images/image339.jpg'
import image340 from '@/assets/images/image340.jpg'
import image341 from '@/assets/images/image341.jpg'
import image342 from '@/assets/images/image342.jpg'
import image343 from '@/assets/images/image343.jpg'
import image344 from '@/assets/images/image344.jpg'
import image345 from '@/assets/images/image345.jpg'
import image346 from '@/assets/images/image346.jpg'
import image347 from '@/assets/images/image347.jpg'
import image348 from '@/assets/images/image348.jpg'
import image349 from '@/assets/images/image349.jpg'
import image350 from '@/assets/images/image350.jpg'
import image351 from '@/assets/images/image351.jpg'
import image352 from '@/assets/images/image352.jpg'
import image353 from '@/assets/images/image353.jpg'
import image354 from '@/assets/images/image354.jpg'
import image355 from '@/assets/images/image355.jpg'
import image356 from '@/assets/images/image356.jpg'
import image357 from '@/assets/images/image357.jpg'
import image358 from '@/assets/images/image358.jpg'
import image359 from '@/assets/images/image359.jpg'
import image360 from '@/assets/images/image360.jpg'
import image361 from '@/assets/images/image361.jpg'
import image362 from '@/assets/images/image362.jpg'
import image363 from '@/assets/images/image363.jpg'
import image364 from '@/assets/images/image364.jpg'
import image365 from '@/assets/images/image365.jpg'
import image366 from '@/assets/images/image366.jpg'
import image367 from '@/assets/images/image367.jpg'
import image368 from '@/assets/images/image368.jpg'
import image369 from '@/assets/images/image369.jpg'
import image370 from '@/assets/images/image370.jpg'
import image371 from '@/assets/images/image371.jpg'
import image372 from '@/assets/images/image372.jpg'
import image373 from '@/assets/images/image373.jpg'
import image374 from '@/assets/images/image374.jpg'
import image375 from '@/assets/images/image375.jpg'
import image376 from '@/assets/images/image376.jpg'
import image377 from '@/assets/images/image377.jpg'
import image378 from '@/assets/images/image378.jpg'
import image379 from '@/assets/images/image379.jpg'
import image380 from '@/assets/images/image380.jpg'
import image381 from '@/assets/images/image381.jpg'
import image382 from '@/assets/images/image382.jpg'
import image383 from '@/assets/images/image383.jpg'
import image384 from '@/assets/images/image384.jpg'
import image385 from '@/assets/images/image385.jpg'
import image386 from '@/assets/images/image386.jpg'
import image387 from '@/assets/images/image387.jpg'
import image388 from '@/assets/images/image388.jpg'
import image389 from '@/assets/images/image389.jpg'
import image390 from '@/assets/images/image390.jpg'
import image391 from '@/assets/images/image391.jpg'
import image392 from '@/assets/images/image392.jpg'
import image393 from '@/assets/images/image393.jpg'
import image394 from '@/assets/images/image394.jpg'
import image395 from '@/assets/images/image395.jpg'
import image396 from '@/assets/images/image396.jpg'
import image397 from '@/assets/images/image397.jpg'
import image398 from '@/assets/images/image398.jpg'
import image399 from '@/assets/images/image399.jpg'
import image400 from '@/assets/images/image400.jpg'
import image401 from '@/assets/images/image401.jpg'
import image402 from '@/assets/images/image402.jpg'
import image403 from '@/assets/images/image403.jpg'
import image404 from '@/assets/images/image404.jpg'
import image405 from '@/assets/images/image405.jpg'
import image406 from '@/assets/images/image406.jpg'
import image407 from '@/assets/images/image407.jpg'
import image408 from '@/assets/images/image408.jpg'
import image409 from '@/assets/images/image409.jpg'
import image410 from '@/assets/images/image410.jpg'
import image411 from '@/assets/images/image411.jpg'
import image412 from '@/assets/images/image412.jpg'
import image413 from '@/assets/images/image413.jpg'
import image414 from '@/assets/images/image414.jpg'
import image415 from '@/assets/images/image415.jpg'
import image416 from '@/assets/images/image416.jpg'
import image417 from '@/assets/images/image417.jpg'
import image418 from '@/assets/images/image418.jpg'
import image419 from '@/assets/images/image419.jpg'
import image420 from '@/assets/images/image420.jpg'
import image421 from '@/assets/images/image421.jpg'
import image422 from '@/assets/images/image422.jpg'
import image423 from '@/assets/images/image423.jpg'
import image424 from '@/assets/images/image424.jpg'
import image425 from '@/assets/images/image425.jpg'
import image426 from '@/assets/images/image426.jpg'
import image427 from '@/assets/images/image427.jpg'
import image428 from '@/assets/images/image428.jpg'
import image429 from '@/assets/images/image429.jpg'
import image430 from '@/assets/images/image430.jpg'
import image431 from '@/assets/images/image431.jpg'
import image432 from '@/assets/images/image432.jpg'
import image433 from '@/assets/images/image433.jpg'
import image434 from '@/assets/images/image434.jpg'
import image435 from '@/assets/images/image435.jpg'
import image436 from '@/assets/images/image436.jpg'
import image437 from '@/assets/images/image437.jpg'
import image438 from '@/assets/images/image438.jpg'
import image439 from '@/assets/images/image439.jpg'
import image440 from '@/assets/images/image440.jpg'
import image441 from '@/assets/images/image441.jpg'
import image442 from '@/assets/images/image442.jpg'
import image443 from '@/assets/images/image443.jpg'
import image444 from '@/assets/images/image444.jpg'
import image445 from '@/assets/images/image445.jpg'
import image446 from '@/assets/images/image446.jpg'
import image447 from '@/assets/images/image447.jpg'
import image448 from '@/assets/images/image448.jpg'
import image449 from '@/assets/images/image449.jpg'
import image450 from '@/assets/images/image450.jpg'
import image451 from '@/assets/images/image451.jpg'
import image452 from '@/assets/images/image452.jpg'
import image453 from '@/assets/images/image453.jpg'
import image454 from '@/assets/images/image454.jpg'
import image455 from '@/assets/images/image455.jpg'
import image456 from '@/assets/images/image456.jpg'
import image457 from '@/assets/images/image457.jpg'
import image458 from '@/assets/images/image458.jpg'
import image459 from '@/assets/images/image459.jpg'
import image460 from '@/assets/images/image460.jpg'
import image461 from '@/assets/images/image461.jpg'
import image462 from '@/assets/images/image462.jpg'
import image463 from '@/assets/images/image463.jpg'
import image464 from '@/assets/images/image464.jpg'
import image465 from '@/assets/images/image465.jpg'
import image466 from '@/assets/images/image466.jpg'
import image467 from '@/assets/images/image467.jpg'
import image468 from '@/assets/images/image468.jpg'
import image469 from '@/assets/images/image469.jpg'
import image470 from '@/assets/images/image470.jpg'
import image471 from '@/assets/images/image471.jpg'
import image472 from '@/assets/images/image472.jpg'
import image473 from '@/assets/images/image473.jpg'
import image474 from '@/assets/images/image474.jpg'
import image475 from '@/assets/images/image475.jpg'
import image476 from '@/assets/images/image476.jpg'
import image477 from '@/assets/images/image477.jpg'
import image478 from '@/assets/images/image478.jpg'
import image479 from '@/assets/images/image479.jpg'
import image480 from '@/assets/images/image480.jpg'
import image481 from '@/assets/images/image481.jpg'
import image482 from '@/assets/images/image482.jpg'
import image483 from '@/assets/images/image483.jpg'
import image484 from '@/assets/images/image484.jpg'
import image485 from '@/assets/images/image485.jpg'
import image486 from '@/assets/images/image486.jpg'
import image487 from '@/assets/images/image487.jpg'
import image488 from '@/assets/images/image488.jpg'
import image489 from '@/assets/images/image489.jpg'
import image490 from '@/assets/images/image490.jpg'
import image491 from '@/assets/images/image491.jpg'
import image492 from '@/assets/images/image492.jpg'
import image493 from '@/assets/images/image493.jpg'
import image494 from '@/assets/images/image494.jpg'
import image495 from '@/assets/images/image495.jpg'
import image496 from '@/assets/images/image496.jpg'
import image497 from '@/assets/images/image497.jpg'
import image498 from '@/assets/images/image498.jpg'
import image499 from '@/assets/images/image499.jpg'
import image500 from '@/assets/images/image500.jpg'
import image501 from '@/assets/images/image501.jpg'
import image502 from '@/assets/images/image502.jpg'
import image503 from '@/assets/images/image503.jpg'
import image504 from '@/assets/images/image504.jpg'
import image505 from '@/assets/images/image505.jpg'
import image506 from '@/assets/images/image506.jpg'
import image507 from '@/assets/images/image507.jpg'
import image508 from '@/assets/images/image508.jpg'
import image509 from '@/assets/images/image509.jpg'
import image510 from '@/assets/images/image510.jpg'
import image511 from '@/assets/images/image511.jpg'
import image512 from '@/assets/images/image512.jpg'
import image513 from '@/assets/images/image513.jpg'
import image514 from '@/assets/images/image514.jpg'
import image515 from '@/assets/images/image515.jpg'
import image516 from '@/assets/images/image516.jpg'
import image517 from '@/assets/images/image517.jpg'
import image518 from '@/assets/images/image518.jpg'
import image519 from '@/assets/images/image519.jpg'
import image520 from '@/assets/images/image520.jpg'
import image521 from '@/assets/images/image521.jpg'
import image522 from '@/assets/images/image522.jpg'
import image523 from '@/assets/images/image523.jpg'
import image524 from '@/assets/images/image524.jpg'
import image525 from '@/assets/images/image525.jpg'
import image526 from '@/assets/images/image526.jpg'
import image527 from '@/assets/images/image527.jpg'
import image528 from '@/assets/images/image528.jpg'
import image529 from '@/assets/images/image529.jpg'
import image530 from '@/assets/images/image530.jpg'
import image531 from '@/assets/images/image531.jpg'
import image532 from '@/assets/images/image532.jpg'
import image533 from '@/assets/images/image533.jpg'
import image534 from '@/assets/images/image534.jpg'
import image535 from '@/assets/images/image535.jpg'
import image536 from '@/assets/images/image536.jpg'
import image537 from '@/assets/images/image537.jpg'
import image538 from '@/assets/images/image538.jpg'
import image539 from '@/assets/images/image539.jpg'
import image540 from '@/assets/images/image540.jpg'
import image541 from '@/assets/images/image541.jpg'
import image542 from '@/assets/images/image542.jpg'
import image543 from '@/assets/images/image543.jpg'
import image544 from '@/assets/images/image544.jpg'
import image545 from '@/assets/images/image545.jpg'
import image546 from '@/assets/images/image546.jpg'
import image547 from '@/assets/images/image547.jpg'
import image548 from '@/assets/images/image548.jpg'
  
  export default {
    name:'gallaryVue',
    components: {
      LightBox,
      dummycopy,
    },
  
    data () {
      return {
        media,
        logo,
        siteLoading,
        paragraphs,
        
        json: [
                {
                    thumb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRx1TQ3PfnhWmLUWcxrGj3atDCZVTVBKetMOWVVQ4ipIStW03pY',
                    sources: [
                        {
                            src: 'https://www.w3schools.com/html/mov_bbb.mp4',
                            type: 'video/mp4',
                        },
                    ],
                    type: 'video',
                    caption: '<h4>Monsters Inc.</h4>',
                    width: 800,
                    height: 600,
                    autoplay: true,
                },
                {
                    thumb: image1,
                    src: image1
                },
                {
                    thumb: image2,
                    src: image2
                },
                {
                    thumb: image3,
                    src: image3
                },
                {
                    thumb: image4,
                    src: image4
                },
                {
                    thumb: image5,
                    src: image5
                },
                {
                    thumb: image6,
                    src: image6
                },
                {
                    thumb: image7,
                    src: image7
                },
                {
                    thumb: image8,
                    src: image8
                },
                {
                    thumb: image9,
                    src: image9
                },
                {
                    thumb: image10,
                    src: image10
                },
                {
                    thumb: image11,
                    src: image11
                },
                {
                    thumb: image12,
                    src: image12
                },
                {
                    thumb: image13,
                    src: image13
                },
                {
                    thumb: image14,
                    src: image14
                },
                {
                    thumb: image15,
                    src: image15
                },
                {
                    thumb: image16,
                    src: image16
                },
                {
                    thumb: image17,
                    src: image17
                },
                {
                    thumb: image18,
                    src: image18
                },
                {
                    thumb: image19,
                    src: image19
                },
                {
                    thumb: image20,
                    src: image20
                },
                {
                    thumb: image21,
                    src: image21
                },
                {
                    thumb: image22,
                    src: image22
                },
                {
                    thumb: image23,
                    src: image23
                },
                {
                    thumb: image24,
                    src: image24
                },
                {
                    thumb: image25,
                    src: image25
                },
                {
                    thumb: image26,
                    src: image26
                },
                {
                    thumb: image27,
                    src: image27
                },
                {
                    thumb: image28,
                    src: image28
                },
                {
                    thumb: image29,
                    src: image29
                },
                {
                    thumb: image30,
                    src: image30
                },
                {
                    thumb: image31,
                    src: image31
                },
                {
                    thumb: image32,
                    src: image32
                },
                {
                    thumb: image33,
                    src: image33
                },
                {
                    thumb: image34,
                    src: image34
                },
                {
                    thumb: image35,
                    src: image35
                },
                {
                    thumb: image36,
                    src: image36
                },
                {
                    thumb: image37,
                    src: image37
                },
                {
                    thumb: image38,
                    src: image38
                },
                {
                    thumb: image39,
                    src: image39
                },
                {
                    thumb: image40,
                    src: image40
                },
                {
                    thumb: image41,
                    src: image41
                },
                {
                    thumb: image42,
                    src: image42
                },
                {
                    thumb: image43,
                    src: image43
                },
                {
                    thumb: image44,
                    src: image44
                },
                {
                    thumb: image45,
                    src: image45
                },
                {
                    thumb: image46,
                    src: image46
                },
                {
                    thumb: image47,
                    src: image47
                },
                {
                    thumb: image48,
                    src: image48
                },
                {
                    thumb: image49,
                    src: image49
                },
                {
                    thumb: image50,
                    src: image50
                },
                {
                    thumb: image51,
                    src: image51
                },
                {
                    thumb: image52,
                    src: image52
                },
                {
                    thumb: image53,
                    src: image53
                },
                {
                    thumb: image54,
                    src: image54
                },
                {
                    thumb: image55,
                    src: image55
                },
                {
                    thumb: image56,
                    src: image56
                },
                {
                    thumb: image57,
                    src: image57
                },
                {
                    thumb: image58,
                    src: image58
                },
                {
                    thumb: image59,
                    src: image59
                },
                {
                    thumb: image60,
                    src: image60
                },
                {
                    thumb: image61,
                    src: image61
                },
                {
                    thumb: image62,
                    src: image62
                },
                {
                    thumb: image63,
                    src: image63
                },
                {
                    thumb: image64,
                    src: image64
                },
                {
                    thumb: image65,
                    src: image65
                },
                {
                    thumb: image66,
                    src: image66
                },
                {
                    thumb: image67,
                    src: image67
                },
                {
                    thumb: image68,
                    src: image68
                },
                {
                    thumb: image69,
                    src: image69
                },
                {
                    thumb: image70,
                    src: image70
                },
                {
                    thumb: image71,
                    src: image71
                },
                {
                    thumb: image72,
                    src: image72
                },
                {
                    thumb: image73,
                    src: image73
                },
                {
                    thumb: image74,
                    src: image74
                },
                {
                    thumb: image75,
                    src: image75
                },
                {
                    thumb: image76,
                    src: image76
                },
                {
                    thumb: image77,
                    src: image77
                },
                {
                    thumb: image78,
                    src: image78
                },
                {
                    thumb: image79,
                    src: image79
                },
                {
                    thumb: image80,
                    src: image80
                },
                {
                    thumb: image81,
                    src: image81
                },
                {
                    thumb: image82,
                    src: image82
                },
                {
                    thumb: image83,
                    src: image83
                },
                {
                    thumb: image84,
                    src: image84
                },
                {
                    thumb: image85,
                    src: image85
                },
                {
                    thumb: image86,
                    src: image86
                },
                {
                    thumb: image87,
                    src: image87
                },
                {
                    thumb: image88,
                    src: image88
                },
                {
                    thumb: image89,
                    src: image89
                },
                {
                    thumb: image90,
                    src: image90
                },
                {
                    thumb: image91,
                    src: image91
                },
                {
                    thumb: image92,
                    src: image92
                },
                {
                    thumb: image93,
                    src: image93
                },
                {
                    thumb: image94,
                    src: image94
                },
                {
                    thumb: image95,
                    src: image95
                },
                {
                    thumb: image96,
                    src: image96
                },
                {
                    thumb: image97,
                    src: image97
                },
                {
                    thumb: image98,
                    src: image98
                },
                {
                    thumb: image99,
                    src: image99
                },
                {
                    thumb: image100,
                    src: image100
                },
                {
                    thumb: image101,
                    src: image101
                },
                {
                    thumb: image102,
                    src: image102
                },
                {
                    thumb: image103,
                    src: image103
                },
                {
                    thumb: image104,
                    src: image104
                },
                {
                    thumb: image105,
                    src: image105
                },
                {
                    thumb: image106,
                    src: image106
                },
                {
                    thumb: image107,
                    src: image107
                },
                {
                    thumb: image108,
                    src: image108
                },
                {
                    thumb: image109,
                    src: image109
                },
                {
                    thumb: image110,
                    src: image110
                },
                {
                    thumb: image111,
                    src: image111
                },
                {
                    thumb: image112,
                    src: image112
                },
                {
                    thumb: image113,
                    src: image113
                },
                {
                    thumb: image114,
                    src: image114
                },
                {
                    thumb: image115,
                    src: image115
                },
                {
                    thumb: image116,
                    src: image116
                },
                {
                    thumb: image117,
                    src: image117
                },
                {
                    thumb: image118,
                    src: image118
                },
                {
                    thumb: image119,
                    src: image119
                },
                {
                    thumb: image120,
                    src: image120
                },
                {
                    thumb: image121,
                    src: image121
                },
                {
                    thumb: image122,
                    src: image122
                },
                {
                    thumb: image123,
                    src: image123
                },
                {
                    thumb: image124,
                    src: image124
                },
                {
                    thumb: image125,
                    src: image125
                },
                {
                    thumb: image126,
                    src: image126
                },
                {
                    thumb: image127,
                    src: image127
                },
                {
                    thumb: image128,
                    src: image128
                },
                {
                    thumb: image129,
                    src: image129
                },
                {
                    thumb: image130,
                    src: image130
                },
                {
                    thumb: image131,
                    src: image131
                },
                {
                    thumb: image132,
                    src: image132
                },
                {
                    thumb: image133,
                    src: image133
                },
                {
                    thumb: image134,
                    src: image134
                },
                {
                    thumb: image135,
                    src: image135
                },
                {
                    thumb: image136,
                    src: image136
                },
                {
                    thumb: image137,
                    src: image137
                },
                {
                    thumb: image138,
                    src: image138
                },
                {
                    thumb: image139,
                    src: image139
                },
                {
                    thumb: image140,
                    src: image140
                },
                {
                    thumb: image141,
                    src: image141
                },
                {
                    thumb: image142,
                    src: image142
                },
                {
                    thumb: image143,
                    src: image143
                },
                {
                    thumb: image144,
                    src: image144
                },
                {
                    thumb: image145,
                    src: image145
                },
                {
                    thumb: image146,
                    src: image146
                },
                {
                    thumb: image147,
                    src: image147
                },
                {
                    thumb: image148,
                    src: image148
                },
                {
                    thumb: image149,
                    src: image149
                },
                {
                    thumb: image150,
                    src: image150
                },
                {
                    thumb: image151,
                    src: image151
                },
                {
                    thumb: image152,
                    src: image152
                },
                {
                    thumb: image153,
                    src: image153
                },
                {
                    thumb: image154,
                    src: image154
                },
                {
                    thumb: image155,
                    src: image155
                },
                {
                    thumb: image156,
                    src: image156
                },
                {
                    thumb: image157,
                    src: image157
                },
                {
                    thumb: image158,
                    src: image158
                },
                {
                    thumb: image159,
                    src: image159
                },
                {
                    thumb: image160,
                    src: image160
                },
                {
                    thumb: image161,
                    src: image161
                },
                {
                    thumb: image162,
                    src: image162
                },
                {
                    thumb: image163,
                    src: image163
                },
                {
                    thumb: image164,
                    src: image164
                },
                {
                    thumb: image165,
                    src: image165
                },
                {
                    thumb: image166,
                    src: image166
                },
                {
                    thumb: image167,
                    src: image167
                },
                {
                    thumb: image168,
                    src: image168
                },
                {
                    thumb: image169,
                    src: image169
                },
                {
                    thumb: image170,
                    src: image170
                },
                {
                    thumb: image171,
                    src: image171
                },
                {
                    thumb: image172,
                    src: image172
                },
                {
                    thumb: image173,
                    src: image173
                },
                {
                    thumb: image174,
                    src: image174
                },
                {
                    thumb: image175,
                    src: image175
                },
                {
                    thumb: image176,
                    src: image176
                },
                {
                    thumb: image177,
                    src: image177
                },
                {
                    thumb: image178,
                    src: image178
                },
                {
                    thumb: image179,
                    src: image179
                },
                {
                    thumb: image180,
                    src: image180
                },
                {
                    thumb: image181,
                    src: image181
                },
                {
                    thumb: image182,
                    src: image182
                },
                {
                    thumb: image183,
                    src: image183
                },
                {
                    thumb: image184,
                    src: image184
                },
                {
                    thumb: image185,
                    src: image185
                },
                {
                    thumb: image186,
                    src: image186
                },
                {
                    thumb: image187,
                    src: image187
                },
                {
                    thumb: image188,
                    src: image188
                },
                {
                    thumb: image189,
                    src: image189
                },
                {
                    thumb: image190,
                    src: image190
                },
                {
                    thumb: image191,
                    src: image191
                },
                {
                    thumb: image192,
                    src: image192
                },
                {
                    thumb: image193,
                    src: image193
                },
                {
                    thumb: image194,
                    src: image194
                },
                {
                    thumb: image195,
                    src: image195
                },
                {
                    thumb: image196,
                    src: image196
                },
                {
                    thumb: image197,
                    src: image197
                },
                {
                    thumb: image198,
                    src: image198
                },
                {
                    thumb: image199,
                    src: image199
                },
                {
                    thumb: image200,
                    src: image200
                },
                {
                    thumb: image201,
                    src: image201
                },
                {
                    thumb: image202,
                    src: image202
                },
                {
                    thumb: image203,
                    src: image203
                },
                {
                    thumb: image204,
                    src: image204
                },
                {
                    thumb: image205,
                    src: image205
                },
                {
                    thumb: image206,
                    src: image206
                },
                {
                    thumb: image207,
                    src: image207
                },
                {
                    thumb: image208,
                    src: image208
                },
                {
                    thumb: image209,
                    src: image209
                },
                {
                    thumb: image210,
                    src: image210
                },
                {
                    thumb: image211,
                    src: image211
                },
                {
                    thumb: image212,
                    src: image212
                },
                {
                    thumb: image213,
                    src: image213
                },
                {
                    thumb: image214,
                    src: image214
                },
                {
                    thumb: image215,
                    src: image215
                },
                {
                    thumb: image216,
                    src: image216
                },
                {
                    thumb: image217,
                    src: image217
                },
                {
                    thumb: image218,
                    src: image218
                },
                {
                    thumb: image219,
                    src: image219
                },
                {
                    thumb: image220,
                    src: image220
                },
                {
                    thumb: image221,
                    src: image221
                },
                {
                    thumb: image222,
                    src: image222
                },
                {
                    thumb: image223,
                    src: image223
                },
                {
                    thumb: image224,
                    src: image224
                },
                {
                    thumb: image225,
                    src: image225
                },
                {
                    thumb: image226,
                    src: image226
                },
                {
                    thumb: image227,
                    src: image227
                },
                {
                    thumb: image228,
                    src: image228
                },
                {
                    thumb: image229,
                    src: image229
                },
                {
                    thumb: image230,
                    src: image230
                },
                {
                    thumb: image231,
                    src: image231
                },
                {
                    thumb: image232,
                    src: image232
                },
                {
                    thumb: image233,
                    src: image233
                },
                {
                    thumb: image234,
                    src: image234
                },
                {
                    thumb: image235,
                    src: image235
                },
                {
                    thumb: image236,
                    src: image236
                },
                {
                    thumb: image237,
                    src: image237
                },
                {
                    thumb: image238,
                    src: image238
                },
                {
                    thumb: image239,
                    src: image239
                },
                {
                    thumb: image240,
                    src: image240
                },
                {
                    thumb: image241,
                    src: image241
                },
                {
                    thumb: image242,
                    src: image242
                },
                {
                    thumb: image243,
                    src: image243
                },
                {
                    thumb: image244,
                    src: image244
                },
                {
                    thumb: image245,
                    src: image245
                },
                {
                    thumb: image246,
                    src: image246
                },
                {
                    thumb: image247,
                    src: image247
                },
                {
                    thumb: image248,
                    src: image248
                },
                {
                    thumb: image249,
                    src: image249
                },
                {
                    thumb: image250,
                    src: image250
                },
                {
                    thumb: image251,
                    src: image251
                },
                {
                    thumb: image252,
                    src: image252
                },
                {
                    thumb: image253,
                    src: image253
                },
                {
                    thumb: image254,
                    src: image254
                },
                {
                    thumb: image255,
                    src: image255
                },
                {
                    thumb: image256,
                    src: image256
                },
                {
                    thumb: image257,
                    src: image257
                },
                {
                    thumb: image258,
                    src: image258
                },
                {
                    thumb: image259,
                    src: image259
                },
                {
                    thumb: image260,
                    src: image260
                },
                {
                    thumb: image261,
                    src: image261
                },
                {
                    thumb: image262,
                    src: image262
                },
                {
                    thumb: image263,
                    src: image263
                },
                {
                    thumb: image264,
                    src: image264
                },
                {
                    thumb: image265,
                    src: image265
                },
                {
                    thumb: image266,
                    src: image266
                },
                {
                    thumb: image267,
                    src: image267
                },
                {
                    thumb: image268,
                    src: image268
                },
                {
                    thumb: image269,
                    src: image269
                },
                {
                    thumb: image270,
                    src: image270
                },
                {
                    thumb: image271,
                    src: image271
                },
                {
                    thumb: image272,
                    src: image272
                },
                {
                    thumb: image273,
                    src: image273
                },
                {
                    thumb: image274,
                    src: image274
                },
                {
                    thumb: image275,
                    src: image275
                },
                {
                    thumb: image276,
                    src: image276
                },
                {
                    thumb: image277,
                    src: image277
                },
                {
                    thumb: image278,
                    src: image278
                },
                {
                    thumb: image279,
                    src: image279
                },
                {
                    thumb: image280,
                    src: image280
                },
                {
                    thumb: image281,
                    src: image281
                },
                {
                    thumb: image282,
                    src: image282
                },
                {
                    thumb: image283,
                    src: image283
                },
                {
                    thumb: image284,
                    src: image284
                },
                {
                    thumb: image285,
                    src: image285
                },
                {
                    thumb: image286,
                    src: image286
                },
                {
                    thumb: image287,
                    src: image287
                },
                {
                    thumb: image288,
                    src: image288
                },
                {
                    thumb: image289,
                    src: image289
                },
                {
                    thumb: image290,
                    src: image290
                },
                {
                    thumb: image291,
                    src: image291
                },
                {
                    thumb: image292,
                    src: image292
                },
                {
                    thumb: image293,
                    src: image293
                },
                {
                    thumb: image294,
                    src: image294
                },
                {
                    thumb: image295,
                    src: image295
                },
                {
                    thumb: image296,
                    src: image296
                },
                {
                    thumb: image297,
                    src: image297
                },
                {
                    thumb: image298,
                    src: image298
                },
                {
                    thumb: image299,
                    src: image299
                },
                {
                    thumb: image300,
                    src: image300
                },
                {
                    thumb: image301,
                    src: image301
                },
                {
                    thumb: image302,
                    src: image302
                },
                {
                    thumb: image303,
                    src: image303
                },
                {
                    thumb: image304,
                    src: image304
                },
                {
                    thumb: image305,
                    src: image305
                },
                {
                    thumb: image306,
                    src: image306
                },
                {
                    thumb: image307,
                    src: image307
                },
                {
                    thumb: image308,
                    src: image308
                },
                {
                    thumb: image309,
                    src: image309
                },
                {
                    thumb: image310,
                    src: image310
                },
                {
                    thumb: image311,
                    src: image311
                },
                {
                    thumb: image312,
                    src: image312
                },
                {
                    thumb: image313,
                    src: image313
                },
                {
                    thumb: image314,
                    src: image314
                },
                {
                    thumb: image315,
                    src: image315
                },
                {
                    thumb: image316,
                    src: image316
                },
                {
                    thumb: image317,
                    src: image317
                },
                {
                    thumb: image318,
                    src: image318
                },
                {
                    thumb: image319,
                    src: image319
                },
                {
                    thumb: image320,
                    src: image320
                },
                {
                    thumb: image321,
                    src: image321
                },
                {
                    thumb: image322,
                    src: image322
                },
                {
                    thumb: image323,
                    src: image323
                },
                {
                    thumb: image324,
                    src: image324
                },
                {
                    thumb: image325,
                    src: image325
                },
                {
                    thumb: image326,
                    src: image326
                },
                {
                    thumb: image327,
                    src: image327
                },
                {
                    thumb: image328,
                    src: image328
                },
                {
                    thumb: image329,
                    src: image329
                },
                {
                    thumb: image330,
                    src: image330
                },
                {
                    thumb: image331,
                    src: image331
                },
                {
                    thumb: image332,
                    src: image332
                },
                {
                    thumb: image333,
                    src: image333
                },
                {
                    thumb: image334,
                    src: image334
                },
                {
                    thumb: image335,
                    src: image335
                },
                {
                    thumb: image336,
                    src: image336
                },
                {
                    thumb: image337,
                    src: image337
                },
                {
                    thumb: image338,
                    src: image338
                },
                {
                    thumb: image339,
                    src: image339
                },
                {
                    thumb: image340,
                    src: image340
                },
                {
                    thumb: image341,
                    src: image341
                },
                {
                    thumb: image342,
                    src: image342
                },
                {
                    thumb: image343,
                    src: image343
                },
                {
                    thumb: image344,
                    src: image344
                },
                {
                    thumb: image345,
                    src: image345
                },
                {
                    thumb: image346,
                    src: image346
                },
                {
                    thumb: image347,
                    src: image347
                },
                {
                    thumb: image348,
                    src: image348
                },
                {
                    thumb: image349,
                    src: image349
                },
                {
                    thumb: image350,
                    src: image350
                },
                {
                    thumb: image351,
                    src: image351
                },
                {
                    thumb: image352,
                    src: image352
                },
                {
                    thumb: image353,
                    src: image353
                },
                {
                    thumb: image354,
                    src: image354
                },
                {
                    thumb: image355,
                    src: image355
                },
                {
                    thumb: image356,
                    src: image356
                },
                {
                    thumb: image357,
                    src: image357
                },
                {
                    thumb: image358,
                    src: image358
                },
                {
                    thumb: image359,
                    src: image359
                },
                {
                    thumb: image360,
                    src: image360
                },
                {
                    thumb: image361,
                    src: image361
                },
                {
                    thumb: image362,
                    src: image362
                },
                {
                    thumb: image363,
                    src: image363
                },
                {
                    thumb: image364,
                    src: image364
                },
                {
                    thumb: image365,
                    src: image365
                },
                {
                    thumb: image366,
                    src: image366
                },
                {
                    thumb: image367,
                    src: image367
                },
                {
                    thumb: image368,
                    src: image368
                },
                {
                    thumb: image369,
                    src: image369
                },
                {
                    thumb: image370,
                    src: image370
                },
                {
                    thumb: image371,
                    src: image371
                },
                {
                    thumb: image372,
                    src: image372
                },
                {
                    thumb: image373,
                    src: image373
                },
                {
                    thumb: image374,
                    src: image374
                },
                {
                    thumb: image375,
                    src: image375
                },
                {
                    thumb: image376,
                    src: image376
                },
                {
                    thumb: image377,
                    src: image377
                },
                {
                    thumb: image378,
                    src: image378
                },
                {
                    thumb: image379,
                    src: image379
                },
                {
                    thumb: image380,
                    src: image380
                },
                {
                    thumb: image381,
                    src: image381
                },
                {
                    thumb: image382,
                    src: image382
                },
                {
                    thumb: image383,
                    src: image383
                },
                {
                    thumb: image384,
                    src: image384
                },
                {
                    thumb: image385,
                    src: image385
                },
                {
                    thumb: image386,
                    src: image386
                },
                {
                    thumb: image387,
                    src: image387
                },
                {
                    thumb: image388,
                    src: image388
                },
                {
                    thumb: image389,
                    src: image389
                },
                {
                    thumb: image390,
                    src: image390
                },
                {
                    thumb: image391,
                    src: image391
                },
                {
                    thumb: image392,
                    src: image392
                },
                {
                    thumb: image393,
                    src: image393
                },
                {
                    thumb: image394,
                    src: image394
                },
                {
                    thumb: image395,
                    src: image395
                },
                {
                    thumb: image396,
                    src: image396
                },
                {
                    thumb: image397,
                    src: image397
                },
                {
                    thumb: image398,
                    src: image398
                },
                {
                    thumb: image399,
                    src: image399
                },
                {
                    thumb: image400,
                    src: image400
                },
                {
                    thumb: image401,
                    src: image401
                },
                {
                    thumb: image402,
                    src: image402
                },
                {
                    thumb: image403,
                    src: image403
                },
                {
                    thumb: image404,
                    src: image404
                },
                {
                    thumb: image405,
                    src: image405
                },
                {
                    thumb: image406,
                    src: image406
                },
                {
                    thumb: image407,
                    src: image407
                },
                {
                    thumb: image408,
                    src: image408
                },
                {
                    thumb: image409,
                    src: image409
                },
                {
                    thumb: image410,
                    src: image410
                },
                {
                    thumb: image411,
                    src: image411
                },
                {
                    thumb: image412,
                    src: image412
                },
                {
                    thumb: image413,
                    src: image413
                },
                {
                    thumb: image414,
                    src: image414
                },
                {
                    thumb: image415,
                    src: image415
                },
                {
                    thumb: image416,
                    src: image416
                },
                {
                    thumb: image417,
                    src: image417
                },
                {
                    thumb: image418,
                    src: image418
                },
                {
                    thumb: image419,
                    src: image419
                },
                {
                    thumb: image420,
                    src: image420
                },
                {
                    thumb: image421,
                    src: image421
                },
                {
                    thumb: image422,
                    src: image422
                },
                {
                    thumb: image423,
                    src: image423
                },
                {
                    thumb: image424,
                    src: image424
                },
                {
                    thumb: image425,
                    src: image425
                },
                {
                    thumb: image426,
                    src: image426
                },
                {
                    thumb: image427,
                    src: image427
                },
                {
                    thumb: image428,
                    src: image428
                },
                {
                    thumb: image429,
                    src: image429
                },
                {
                    thumb: image430,
                    src: image430
                },
                {
                    thumb: image431,
                    src: image431
                },
                {
                    thumb: image432,
                    src: image432
                },
                {
                    thumb: image433,
                    src: image433
                },
                {
                    thumb: image434,
                    src: image434
                },
                {
                    thumb: image435,
                    src: image435
                },
                {
                    thumb: image436,
                    src: image436
                },
                {
                    thumb: image437,
                    src: image437
                },
                {
                    thumb: image438,
                    src: image438
                },
                {
                    thumb: image439,
                    src: image439
                },
                {
                    thumb: image440,
                    src: image440
                },
                {
                    thumb: image441,
                    src: image441
                },
                {
                    thumb: image442,
                    src: image442
                },
                {
                    thumb: image443,
                    src: image443
                },
                {
                    thumb: image444,
                    src: image444
                },
                {
                    thumb: image445,
                    src: image445
                },
                {
                    thumb: image446,
                    src: image446
                },
                {
                    thumb: image447,
                    src: image447
                },
                {
                    thumb: image448,
                    src: image448
                },
                {
                    thumb: image449,
                    src: image449
                },
                {
                    thumb: image450,
                    src: image450
                },
                {
                    thumb: image451,
                    src: image451
                },
                {
                    thumb: image452,
                    src: image452
                },
                {
                    thumb: image453,
                    src: image453
                },
                {
                    thumb: image454,
                    src: image454
                },
                {
                    thumb: image455,
                    src: image455
                },
                {
                    thumb: image456,
                    src: image456
                },
                {
                    thumb: image457,
                    src: image457
                },
                {
                    thumb: image458,
                    src: image458
                },
                {
                    thumb: image459,
                    src: image459
                },
                {
                    thumb: image460,
                    src: image460
                },
                {
                    thumb: image461,
                    src: image461
                },
                {
                    thumb: image462,
                    src: image462
                },
                {
                    thumb: image463,
                    src: image463
                },
                {
                    thumb: image464,
                    src: image464
                },
                {
                    thumb: image465,
                    src: image465
                },
                {
                    thumb: image466,
                    src: image466
                },
                {
                    thumb: image467,
                    src: image467
                },
                {
                    thumb: image468,
                    src: image468
                },
                {
                    thumb: image469,
                    src: image469
                },
                {
                    thumb: image470,
                    src: image470
                },
                {
                    thumb: image471,
                    src: image471
                },
                {
                    thumb: image472,
                    src: image472
                },
                {
                    thumb: image473,
                    src: image473
                },
                {
                    thumb: image474,
                    src: image474
                },
                {
                    thumb: image475,
                    src: image475
                },
                {
                    thumb: image476,
                    src: image476
                },
                {
                    thumb: image477,
                    src: image477
                },
                {
                    thumb: image478,
                    src: image478
                },
                {
                    thumb: image479,
                    src: image479
                },
                {
                    thumb: image480,
                    src: image480
                },
                {
                    thumb: image481,
                    src: image481
                },
                {
                    thumb: image482,
                    src: image482
                },
                {
                    thumb: image483,
                    src: image483
                },
                {
                    thumb: image484,
                    src: image484
                },
                {
                    thumb: image485,
                    src: image485
                },
                {
                    thumb: image486,
                    src: image486
                },
                {
                    thumb: image487,
                    src: image487
                },
                {
                    thumb: image488,
                    src: image488
                },
                {
                    thumb: image489,
                    src: image489
                },
                {
                    thumb: image490,
                    src: image490
                },
                {
                    thumb: image491,
                    src: image491
                },
                {
                    thumb: image492,
                    src: image492
                },
                {
                    thumb: image493,
                    src: image493
                },
                {
                    thumb: image494,
                    src: image494
                },
                {
                    thumb: image495,
                    src: image495
                },
                {
                    thumb: image496,
                    src: image496
                },
                {
                    thumb: image497,
                    src: image497
                },
                {
                    thumb: image498,
                    src: image498
                },
                {
                    thumb: image499,
                    src: image499
                },
                {
                    thumb: image500,
                    src: image500
                },
                {
                    thumb: image501,
                    src: image501
                },
                {
                    thumb: image502,
                    src: image502
                },
                {
                    thumb: image503,
                    src: image503
                },
                {
                    thumb: image504,
                    src: image504
                },
                {
                    thumb: image505,
                    src: image505
                },
                {
                    thumb: image506,
                    src: image506
                },
                {
                    thumb: image507,
                    src: image507
                },
                {
                    thumb: image508,
                    src: image508
                },
                {
                    thumb: image509,
                    src: image509
                },
                {
                    thumb: image510,
                    src: image510
                },
                {
                    thumb: image511,
                    src: image511
                },
                {
                    thumb: image512,
                    src: image512
                },
                {
                    thumb: image513,
                    src: image513
                },
                {
                    thumb: image514,
                    src: image514
                },
                {
                    thumb: image515,
                    src: image515
                },
                {
                    thumb: image516,
                    src: image516
                },
                {
                    thumb: image517,
                    src: image517
                },
                {
                    thumb: image518,
                    src: image518
                },
                {
                    thumb: image519,
                    src: image519
                },
                {
                    thumb: image520,
                    src: image520
                },
                {
                    thumb: image521,
                    src: image521
                },
                {
                    thumb: image522,
                    src: image522
                },
                {
                    thumb: image523,
                    src: image523
                },
                {
                    thumb: image524,
                    src: image524
                },
                {
                    thumb: image525,
                    src: image525
                },
                {
                    thumb: image526,
                    src: image526
                },
                {
                    thumb: image527,
                    src: image527
                },
                {
                    thumb: image528,
                    src: image528
                },
                {
                    thumb: image529,
                    src: image529
                },
                {
                    thumb: image530,
                    src: image530
                },
                {
                    thumb: image531,
                    src: image531
                },
                {
                    thumb: image532,
                    src: image532
                },
                {
                    thumb: image533,
                    src: image533
                },
                {
                    thumb: image534,
                    src: image534
                },
                {
                    thumb: image535,
                    src: image535
                },
                {
                    thumb: image536,
                    src: image536
                },
                {
                    thumb: image537,
                    src: image537
                },
                {
                    thumb: image538,
                    src: image538
                },
                {
                    thumb: image539,
                    src: image539
                },
                {
                    thumb: image540,
                    src: image540
                },
                {
                    thumb: image541,
                    src: image541
                },
                {
                    thumb: image542,
                    src: image542
                },
                {
                    thumb: image543,
                    src: image543
                },
                {
                    thumb: image544,
                    src: image544
                },
                {
                    thumb: image545,
                    src: image545
                },
                {
                    thumb: image546,
                    src: image546
                },
                {
                    thumb: image547,
                    src: image547
                },
                {
                    thumb: image548,
                    src: image548
                },
            ]
      }
    },
  
    methods: {
      getimage(image){
       return `@/assets/images/${image}`
      },
      openGallery(index) {
            console.log('enter2')
        this.$refs.lightbox.showImage(index)
      }
    }
  }
  </script>
  <style>
  @media only screen and (max-width: 600px) {
  .imageHeight{
    height: 100px;
  }
  }
  @media only screen and (min-width: 600px) {
  .imageHeight{
    height: 300px;
  }
  }
</style>