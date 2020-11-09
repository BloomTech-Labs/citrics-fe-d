import React, { useState } from 'react';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { cardContainerActs } from '../../../state/actions';

//COMPONENTS
import MultipleCityCard from '../../common/MultipleCityCard';
import Footer from '../../common/Footer';
import { LandingHeader as Header } from '../../common/Header';
import MultipleCityChart from '../../common/MultipleCityChart';

const temp_data = [
  {
    cityid: 199131,
    citynamestate: 'Los Angeles, CA',
    statecode: 'CA',
    timezone: 'UTC\u22128 Pacific',
    latitude: 34.0536909,
    logitude: -118.2427666,
    fpis: '06-4400',
    gnis: null,
    wikiimgurl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Los_Angeles_with_Mount_Baldy.jpg/560px-Los_Angeles_with_Mount_Baldy.jpg',
    website: 'www.lacity.org ',
    population: 3999759.0,
    densitymisq: 8485.74,
    densitykmsq: 3276.37,
    averageage: 35.8,
    householdincome: 60197.0,
    individualincome: 33496.0,
    averagehouse: 647000.0,
    rent: 1397.0,
    costoflivingindex: 145.8,
    acastatus: 'Adopted',
    averagetemp: 65.60833333333333,
    averageperc: 1.9216666666666669,
    avgnewcovidcases: 'NaN',
    zipcodes: [
      { code: '\\nList\\n90001\u201390084' },
      { code: '90086\u201390089' },
      { code: '90091' },
      { code: '90093\u201390097' },
      { code: '90099' },
      { code: '90101\u201390103' },
      { code: '90174' },
      { code: '90185' },
      { code: '90189' },
      { code: '90291\u201390293' },
      { code: '91040\u201391043' },
      { code: '91303\u201391308' },
      { code: '91311' },
      { code: '91316' },
      { code: '91324\u201391328' },
      { code: '91330' },
      { code: '91331' },
      { code: '91335' },
      { code: '91340' },
      { code: '91342\u201391349' },
      { code: '91352\u201391353' },
      { code: '91356\u201391357' },
      { code: '91364\u201391367' },
      { code: '91401\u201391499' },
      { code: '91504\u201391505' },
      { code: '91601\u20139160915' },
      { code: '\\n' },
    ],
    counties: 'Los Angeles',
    populationhist: [
      { year: 2010, pop: 3792621.0 },
      { year: 2011, pop: 3820876.0 },
      { year: 2012, pop: 3851202.0 },
      { year: 2013, pop: 3881622.0 },
      { year: 2014, pop: 3909901.0 },
      { year: 2015, pop: 3938568.0 },
      { year: 2016, pop: 3963226.0 },
      { year: 2017, pop: 3975788.0 },
      { year: 2018, pop: 3977596.0 },
      { year: 2019, pop: 3979576.0 },
    ],
    historicalincome: [
      { year: 2019, individualincome: 51676, householdincome: 80440 },
      { year: 2018, individualincome: 48563, householdincome: 75277 },
      { year: 2017, individualincome: 46599, householdincome: 71805 },
      { year: 2016, individualincome: 44115, householdincome: 67739 },
      { year: 2015, individualincome: 42068, householdincome: 64500 },
      { year: 2014, individualincome: 40842, householdincome: 61933 },
      { year: 2013, individualincome: 40319, householdincome: 60190 },
      { year: 2012, individualincome: 39504, householdincome: 58328 },
      { year: 2011, individualincome: 37584, householdincome: 57287 },
      { year: 2010, individualincome: 38460, householdincome: 57708 },
    ],
    historicalaveragehouse: [
      { year: 2010, month: 1, housingcost: 439447 },
      { year: 2010, month: 2, housingcost: 437254 },
      { year: 2010, month: 3, housingcost: 436814 },
      { year: 2010, month: 4, housingcost: 437860 },
      { year: 2010, month: 5, housingcost: 441781 },
      { year: 2010, month: 6, housingcost: 440185 },
      { year: 2010, month: 7, housingcost: 438497 },
      { year: 2010, month: 8, housingcost: 434700 },
      { year: 2010, month: 9, housingcost: 431774 },
      { year: 2010, month: 10, housingcost: 428473 },
      { year: 2010, month: 11, housingcost: 424073 },
      { year: 2010, month: 12, housingcost: 421494 },
      { year: 2011, month: 1, housingcost: 419847 },
      { year: 2011, month: 2, housingcost: 419482 },
      { year: 2011, month: 3, housingcost: 416985 },
      { year: 2011, month: 4, housingcost: 414319 },
      { year: 2011, month: 5, housingcost: 408965 },
      { year: 2011, month: 6, housingcost: 408002 },
      { year: 2011, month: 7, housingcost: 406625 },
      { year: 2011, month: 8, housingcost: 405298 },
      { year: 2011, month: 9, housingcost: 402306 },
      { year: 2011, month: 10, housingcost: 399150 },
      { year: 2011, month: 11, housingcost: 398832 },
      { year: 2011, month: 12, housingcost: 397403 },
      { year: 2012, month: 1, housingcost: 396836 },
      { year: 2012, month: 2, housingcost: 395759 },
      { year: 2012, month: 3, housingcost: 395234 },
      { year: 2012, month: 4, housingcost: 395298 },
      { year: 2012, month: 5, housingcost: 396841 },
      { year: 2012, month: 6, housingcost: 398930 },
      { year: 2012, month: 7, housingcost: 401451 },
      { year: 2012, month: 8, housingcost: 403893 },
      { year: 2012, month: 9, housingcost: 407545 },
      { year: 2012, month: 10, housingcost: 413169 },
      { year: 2012, month: 11, housingcost: 418017 },
      { year: 2012, month: 12, housingcost: 424751 },
      { year: 2013, month: 1, housingcost: 429744 },
      { year: 2013, month: 2, housingcost: 438236 },
      { year: 2013, month: 3, housingcost: 446911 },
      { year: 2013, month: 4, housingcost: 457616 },
      { year: 2013, month: 5, housingcost: 466421 },
      { year: 2013, month: 6, housingcost: 475145 },
      { year: 2013, month: 7, housingcost: 483888 },
      { year: 2013, month: 8, housingcost: 494942 },
      { year: 2013, month: 9, housingcost: 504384 },
      { year: 2013, month: 10, housingcost: 510936 },
      { year: 2013, month: 11, housingcost: 515754 },
      { year: 2013, month: 12, housingcost: 518461 },
      { year: 2014, month: 1, housingcost: 522860 },
      { year: 2014, month: 2, housingcost: 523540 },
      { year: 2014, month: 3, housingcost: 525221 },
      { year: 2014, month: 4, housingcost: 524907 },
      { year: 2014, month: 5, housingcost: 526398 },
      { year: 2014, month: 6, housingcost: 527087 },
      { year: 2014, month: 7, housingcost: 529749 },
      { year: 2014, month: 8, housingcost: 529409 },
      { year: 2014, month: 9, housingcost: 529752 },
      { year: 2014, month: 10, housingcost: 529835 },
      { year: 2014, month: 11, housingcost: 533060 },
      { year: 2014, month: 12, housingcost: 536369 },
      { year: 2015, month: 1, housingcost: 540770 },
      { year: 2015, month: 2, housingcost: 545462 },
      { year: 2015, month: 3, housingcost: 550008 },
      { year: 2015, month: 4, housingcost: 551627 },
      { year: 2015, month: 5, housingcost: 554491 },
      { year: 2015, month: 6, housingcost: 557255 },
      { year: 2015, month: 7, housingcost: 559571 },
      { year: 2015, month: 8, housingcost: 562283 },
      { year: 2015, month: 9, housingcost: 565193 },
      { year: 2015, month: 10, housingcost: 569886 },
      { year: 2015, month: 11, housingcost: 573642 },
      { year: 2015, month: 12, housingcost: 579216 },
      { year: 2016, month: 1, housingcost: 582365 },
      { year: 2016, month: 2, housingcost: 586197 },
      { year: 2016, month: 3, housingcost: 588492 },
      { year: 2016, month: 4, housingcost: 594689 },
      { year: 2016, month: 5, housingcost: 598774 },
      { year: 2016, month: 6, housingcost: 603456 },
      { year: 2016, month: 7, housingcost: 605783 },
      { year: 2016, month: 8, housingcost: 609825 },
      { year: 2016, month: 9, housingcost: 614680 },
      { year: 2016, month: 10, housingcost: 620009 },
      { year: 2016, month: 11, housingcost: 622959 },
      { year: 2016, month: 12, housingcost: 624786 },
      { year: 2017, month: 1, housingcost: 628294 },
      { year: 2017, month: 2, housingcost: 631427 },
      { year: 2017, month: 3, housingcost: 635070 },
      { year: 2017, month: 4, housingcost: 637393 },
      { year: 2017, month: 5, housingcost: 642084 },
      { year: 2017, month: 6, housingcost: 646086 },
      { year: 2017, month: 7, housingcost: 650858 },
      { year: 2017, month: 8, housingcost: 654837 },
      { year: 2017, month: 9, housingcost: 658634 },
      { year: 2017, month: 10, housingcost: 661764 },
      { year: 2017, month: 11, housingcost: 667512 },
      { year: 2017, month: 12, housingcost: 673141 },
      { year: 2018, month: 1, housingcost: 678422 },
      { year: 2018, month: 2, housingcost: 683876 },
      { year: 2018, month: 3, housingcost: 689956 },
      { year: 2018, month: 4, housingcost: 695163 },
      { year: 2018, month: 5, housingcost: 698885 },
      { year: 2018, month: 6, housingcost: 702314 },
      { year: 2018, month: 7, housingcost: 705315 },
      { year: 2018, month: 8, housingcost: 706598 },
      { year: 2018, month: 9, housingcost: 707110 },
      { year: 2018, month: 10, housingcost: 708120 },
      { year: 2018, month: 11, housingcost: 708970 },
      { year: 2018, month: 12, housingcost: 708244 },
      { year: 2019, month: 1, housingcost: 707563 },
      { year: 2019, month: 2, housingcost: 704230 },
      { year: 2019, month: 3, housingcost: 701150 },
      { year: 2019, month: 4, housingcost: 700470 },
      { year: 2019, month: 5, housingcost: 705092 },
      { year: 2019, month: 6, housingcost: 711511 },
      { year: 2019, month: 7, housingcost: 712553 },
      { year: 2019, month: 8, housingcost: 712147 },
      { year: 2019, month: 9, housingcost: 711833 },
      { year: 2019, month: 10, housingcost: 715554 },
      { year: 2019, month: 11, housingcost: 718081 },
      { year: 2019, month: 12, housingcost: 722161 },
      { year: 2020, month: 1, housingcost: 726321 },
      { year: 2020, month: 2, housingcost: 732885 },
      { year: 2020, month: 3, housingcost: 739346 },
      { year: 2020, month: 4, housingcost: 744932 },
      { year: 2020, month: 5, housingcost: 747136 },
      { year: 2020, month: 6, housingcost: 748717 },
      { year: 2020, month: 7, housingcost: 755233 },
      { year: 2020, month: 8, housingcost: 764528 },
    ],
    covid: [],
    historicalweather: [
      { month: 'Sep', precipitation: 0.05, temperature: 76.0 },
      { month: 'Mar', precipitation: 2.3, temperature: 60.3 },
      { month: 'Nov', precipitation: 1.91, temperature: 64.4 },
      { month: 'Apr', precipitation: 0.03, temperature: 65.1 },
      { month: 'Dec', precipitation: 4.79, temperature: 57.9 },
      { month: 'Jan', precipitation: 5.0, temperature: 57.9 },
      { month: 'Jun', precipitation: 0.06, temperature: 68.8 },
      { month: 'Oct', precipitation: 0.0, temperature: 71.3 },
      { month: 'Jul', precipitation: 0.0, temperature: 74.1 },
      { month: 'May', precipitation: 1.05, temperature: 63.0 },
      { month: 'Feb', precipitation: 7.87, temperature: 53.5 },
      { month: 'Aug', precipitation: 0.0, temperature: 75.0 },
    ],
  },
  {
    cityid: 269526,
    citynamestate: 'New York, NY',
    statecode: 'NY',
    timezone: 'UTC\u22125 Eastern',
    latitude: 40.7127281,
    logitude: -74.0060152,
    fpis: '36-5100',
    gnis: null,
    wikiimgurl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/556px-Lower_Manhattan_skyline_-_June_2017.jpg',
    website: 'NYC.gov',
    population: 8622698.0,
    densitymisq: 27755.25,
    densitykmsq: 10716.36,
    averageage: 36.6,
    householdincome: 60879.0,
    individualincome: 37447.0,
    averagehouse: 609500.0,
    rent: 1379.0,
    costoflivingindex: 162.7,
    acastatus: 'Adopted',
    averagetemp: 56.00833333333333,
    averageperc: 4.809166666666667,
    avgnewcovidcases: 'NaN',
    zipcodes: [
      { code: '100xx\u2013104xx' },
      { code: '11004\u201305' },
      { code: '111xx\u2013114xx' },
      { code: '116xx' },
    ],
    counties: [{ name: '36103' }, { name: '36103' }],
    populationhist: [
      { year: 2010, pop: 8175133.0 },
      { year: 2011, pop: 8272948.0 },
      { year: 2012, pop: 8346693.0 },
      { year: 2013, pop: 8396091.0 },
      { year: 2014, pop: 8433806.0 },
      { year: 2015, pop: 8463049.0 },
      { year: 2016, pop: 8469153.0 },
      { year: 2017, pop: 8437478.0 },
      { year: 2018, pop: 8390081.0 },
      { year: 2019, pop: 8336817.0 },
    ],
    historicalincome: [
      { year: 2019, individualincome: 44681, householdincome: 72108 },
      { year: 2018, individualincome: 41092, householdincome: 67844 },
      { year: 2017, individualincome: 40350, householdincome: 64894 },
      { year: 2016, individualincome: 39313, householdincome: 62909 },
      { year: 2015, individualincome: 38111, householdincome: 60850 },
      { year: 2014, individualincome: 37063, householdincome: 58878 },
      { year: 2013, individualincome: 35998, householdincome: 57369 },
      { year: 2012, individualincome: 35873, householdincome: 56448 },
      { year: 2011, individualincome: 34427, householdincome: 55246 },
      { year: 2010, individualincome: 34170, householdincome: 54148 },
    ],
    historicalaveragehouse: [
      { year: 2010, month: 1, housingcost: 441380 },
      { year: 2010, month: 2, housingcost: 441569 },
      { year: 2010, month: 3, housingcost: 440181 },
      { year: 2010, month: 4, housingcost: 439511 },
      { year: 2010, month: 5, housingcost: 439203 },
      { year: 2010, month: 6, housingcost: 441127 },
      { year: 2010, month: 7, housingcost: 443438 },
      { year: 2010, month: 8, housingcost: 444730 },
      { year: 2010, month: 9, housingcost: 445994 },
      { year: 2010, month: 10, housingcost: 446408 },
      { year: 2010, month: 11, housingcost: 445718 },
      { year: 2010, month: 12, housingcost: 444032 },
      { year: 2011, month: 1, housingcost: 443132 },
      { year: 2011, month: 2, housingcost: 442929 },
      { year: 2011, month: 3, housingcost: 444811 },
      { year: 2011, month: 4, housingcost: 445037 },
      { year: 2011, month: 5, housingcost: 445223 },
      { year: 2011, month: 6, housingcost: 443405 },
      { year: 2011, month: 7, housingcost: 442231 },
      { year: 2011, month: 8, housingcost: 441569 },
      { year: 2011, month: 9, housingcost: 440811 },
      { year: 2011, month: 10, housingcost: 440034 },
      { year: 2011, month: 11, housingcost: 439062 },
      { year: 2011, month: 12, housingcost: 439128 },
      { year: 2012, month: 1, housingcost: 438884 },
      { year: 2012, month: 2, housingcost: 438660 },
      { year: 2012, month: 3, housingcost: 437283 },
      { year: 2012, month: 4, housingcost: 437200 },
      { year: 2012, month: 5, housingcost: 437086 },
      { year: 2012, month: 6, housingcost: 438077 },
      { year: 2012, month: 7, housingcost: 438436 },
      { year: 2012, month: 8, housingcost: 438772 },
      { year: 2012, month: 9, housingcost: 439244 },
      { year: 2012, month: 10, housingcost: 440246 },
      { year: 2012, month: 11, housingcost: 442259 },
      { year: 2012, month: 12, housingcost: 444254 },
      { year: 2013, month: 1, housingcost: 445868 },
      { year: 2013, month: 2, housingcost: 446866 },
      { year: 2013, month: 3, housingcost: 448204 },
      { year: 2013, month: 4, housingcost: 449979 },
      { year: 2013, month: 5, housingcost: 452464 },
      { year: 2013, month: 6, housingcost: 454983 },
      { year: 2013, month: 7, housingcost: 457546 },
      { year: 2013, month: 8, housingcost: 460336 },
      { year: 2013, month: 9, housingcost: 463246 },
      { year: 2013, month: 10, housingcost: 466501 },
      { year: 2013, month: 11, housingcost: 469239 },
      { year: 2013, month: 12, housingcost: 471791 },
      { year: 2014, month: 1, housingcost: 475064 },
      { year: 2014, month: 2, housingcost: 479296 },
      { year: 2014, month: 3, housingcost: 483735 },
      { year: 2014, month: 4, housingcost: 487151 },
      { year: 2014, month: 5, housingcost: 489519 },
      { year: 2014, month: 6, housingcost: 491097 },
      { year: 2014, month: 7, housingcost: 493218 },
      { year: 2014, month: 8, housingcost: 495838 },
      { year: 2014, month: 9, housingcost: 498784 },
      { year: 2014, month: 10, housingcost: 501054 },
      { year: 2014, month: 11, housingcost: 503008 },
      { year: 2014, month: 12, housingcost: 505313 },
      { year: 2015, month: 1, housingcost: 507618 },
      { year: 2015, month: 2, housingcost: 509998 },
      { year: 2015, month: 3, housingcost: 512323 },
      { year: 2015, month: 4, housingcost: 515345 },
      { year: 2015, month: 5, housingcost: 518583 },
      { year: 2015, month: 6, housingcost: 522779 },
      { year: 2015, month: 7, housingcost: 526322 },
      { year: 2015, month: 8, housingcost: 529702 },
      { year: 2015, month: 9, housingcost: 532514 },
      { year: 2015, month: 10, housingcost: 535590 },
      { year: 2015, month: 11, housingcost: 539171 },
      { year: 2015, month: 12, housingcost: 542506 },
      { year: 2016, month: 1, housingcost: 545283 },
      { year: 2016, month: 2, housingcost: 547805 },
      { year: 2016, month: 3, housingcost: 550112 },
      { year: 2016, month: 4, housingcost: 553336 },
      { year: 2016, month: 5, housingcost: 556338 },
      { year: 2016, month: 6, housingcost: 559238 },
      { year: 2016, month: 7, housingcost: 561906 },
      { year: 2016, month: 8, housingcost: 564843 },
      { year: 2016, month: 9, housingcost: 567966 },
      { year: 2016, month: 10, housingcost: 570905 },
      { year: 2016, month: 11, housingcost: 574074 },
      { year: 2016, month: 12, housingcost: 577603 },
      { year: 2017, month: 1, housingcost: 581752 },
      { year: 2017, month: 2, housingcost: 584580 },
      { year: 2017, month: 3, housingcost: 587506 },
      { year: 2017, month: 4, housingcost: 589581 },
      { year: 2017, month: 5, housingcost: 592988 },
      { year: 2017, month: 6, housingcost: 596393 },
      { year: 2017, month: 7, housingcost: 600801 },
      { year: 2017, month: 8, housingcost: 604600 },
      { year: 2017, month: 9, housingcost: 608524 },
      { year: 2017, month: 10, housingcost: 613041 },
      { year: 2017, month: 11, housingcost: 616692 },
      { year: 2017, month: 12, housingcost: 619563 },
      { year: 2018, month: 1, housingcost: 621811 },
      { year: 2018, month: 2, housingcost: 625783 },
      { year: 2018, month: 3, housingcost: 630051 },
      { year: 2018, month: 4, housingcost: 634106 },
      { year: 2018, month: 5, housingcost: 637355 },
      { year: 2018, month: 6, housingcost: 640307 },
      { year: 2018, month: 7, housingcost: 642659 },
      { year: 2018, month: 8, housingcost: 645058 },
      { year: 2018, month: 9, housingcost: 647901 },
      { year: 2018, month: 10, housingcost: 650144 },
      { year: 2018, month: 11, housingcost: 652450 },
      { year: 2018, month: 12, housingcost: 653841 },
      { year: 2019, month: 1, housingcost: 654581 },
      { year: 2019, month: 2, housingcost: 654664 },
      { year: 2019, month: 3, housingcost: 655442 },
      { year: 2019, month: 4, housingcost: 655389 },
      { year: 2019, month: 5, housingcost: 655952 },
      { year: 2019, month: 6, housingcost: 655041 },
      { year: 2019, month: 7, housingcost: 654894 },
      { year: 2019, month: 8, housingcost: 653376 },
      { year: 2019, month: 9, housingcost: 651721 },
      { year: 2019, month: 10, housingcost: 650214 },
      { year: 2019, month: 11, housingcost: 649102 },
      { year: 2019, month: 12, housingcost: 648889 },
      { year: 2020, month: 1, housingcost: 649298 },
      { year: 2020, month: 2, housingcost: 649621 },
      { year: 2020, month: 3, housingcost: 649246 },
      { year: 2020, month: 4, housingcost: 649730 },
      { year: 2020, month: 5, housingcost: 649884 },
      { year: 2020, month: 6, housingcost: 651331 },
      { year: 2020, month: 7, housingcost: 652389 },
      { year: 2020, month: 8, housingcost: 654683 },
    ],
    covid: [],
    historicalweather: [
      { month: 'Sep', precipitation: 1.46, temperature: 70.7 },
      { month: 'Mar', precipitation: 3.95, temperature: 41.1 },
      { month: 'Nov', precipitation: 1.97, temperature: 45.4 },
      { month: 'Apr', precipitation: 4.64, temperature: 54.6 },
      { month: 'Dec', precipitation: 7.51, temperature: 38.9 },
      { month: 'Jan', precipitation: 4.86, temperature: 34.1 },
      { month: 'Jun', precipitation: 6.42, temperature: 71.8 },
      { month: 'Oct', precipitation: 6.29, temperature: 60.1 },
      { month: 'Jul', precipitation: 5.18, temperature: 80.5 },
      { month: 'May', precipitation: 7.29, temperature: 62.1 },
      { month: 'Feb', precipitation: 3.61, temperature: 35.5 },
      { month: 'Aug', precipitation: 4.53, temperature: 77.3 },
    ],
  },
  {
    cityid: 510890,
    citynamestate: 'Austin, TX',
    statecode: 'TX',
    timezone: 'UTC\u22126 Central',
    latitude: 30.2711286,
    logitude: -97.7436995,
    fpis: '48-05000',
    gnis: null,
    wikiimgurl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Austin_August_2019_19_%28skyline_and_Lady_Bird_Lake%29.jpg/560px-Austin_August_2019_19_%28skyline_and_Lady_Bird_Lake%29.jpg',
    website: 'austintexas.gov',
    population: 950715.0,
    densitymisq: 3059.68,
    densitykmsq: 1181.35,
    averageage: 33.4,
    householdincome: 67755.0,
    individualincome: 40323.0,
    averagehouse: 332700.0,
    rent: 1244.0,
    costoflivingindex: 95.6,
    acastatus: 'Not Adopted',
    averagetemp: 69.51666666666667,
    averageperc: 2.6541666666666663,
    avgnewcovidcases: 'NaN',
    zipcodes: [
      { code: '78701\u201378705' },
      { code: '78708\u201378739' },
      { code: '78741\u201378742' },
      { code: '78744\u201378769' },
    ],
    counties: [{ name: 'Travis' }, { name: 'Hays' }, { name: 'Williamson' }],
    populationhist: [
      { year: 2010, pop: 790390.0 },
      { year: 2011, pop: 828459.0 },
      { year: 2012, pop: 854482.0 },
      { year: 2013, pop: 875003.0 },
      { year: 2014, pop: 901170.0 },
      { year: 2015, pop: 921114.0 },
      { year: 2016, pop: 939447.0 },
      { year: 2017, pop: 951553.0 },
      { year: 2018, pop: 962469.0 },
      { year: 2019, pop: 978908.0 },
    ],
    historicalincome: [
      { year: 2019, individualincome: 40389, householdincome: 64034 },
      { year: 2018, individualincome: 37848, householdincome: 60629 },
      { year: 2017, individualincome: 36529, householdincome: 59206 },
      { year: 2016, individualincome: 36060, householdincome: 56565 },
      { year: 2015, individualincome: 35525, householdincome: 55653 },
      { year: 2014, individualincome: 33210, householdincome: 53035 },
      { year: 2013, individualincome: 32430, householdincome: 51704 },
      { year: 2012, individualincome: 31816, householdincome: 50740 },
      { year: 2011, individualincome: 31134, householdincome: 49392 },
      { year: 2010, individualincome: 30800, householdincome: 48615 },
    ],
    historicalaveragehouse: [
      { year: 2010, month: 1, housingcost: 235275 },
      { year: 2010, month: 2, housingcost: 234907 },
      { year: 2010, month: 3, housingcost: 234726 },
      { year: 2010, month: 4, housingcost: 234814 },
      { year: 2010, month: 5, housingcost: 234901 },
      { year: 2010, month: 6, housingcost: 234677 },
      { year: 2010, month: 7, housingcost: 234159 },
      { year: 2010, month: 8, housingcost: 232967 },
      { year: 2010, month: 9, housingcost: 231963 },
      { year: 2010, month: 10, housingcost: 231246 },
      { year: 2010, month: 11, housingcost: 230513 },
      { year: 2010, month: 12, housingcost: 229771 },
      { year: 2011, month: 1, housingcost: 229287 },
      { year: 2011, month: 2, housingcost: 228597 },
      { year: 2011, month: 3, housingcost: 228015 },
      { year: 2011, month: 4, housingcost: 227521 },
      { year: 2011, month: 5, housingcost: 226867 },
      { year: 2011, month: 6, housingcost: 226245 },
      { year: 2011, month: 7, housingcost: 225749 },
      { year: 2011, month: 8, housingcost: 226338 },
      { year: 2011, month: 9, housingcost: 227028 },
      { year: 2011, month: 10, housingcost: 227469 },
      { year: 2011, month: 11, housingcost: 227618 },
      { year: 2011, month: 12, housingcost: 227743 },
      { year: 2012, month: 1, housingcost: 228403 },
      { year: 2012, month: 2, housingcost: 229277 },
      { year: 2012, month: 3, housingcost: 230476 },
      { year: 2012, month: 4, housingcost: 231483 },
      { year: 2012, month: 5, housingcost: 232773 },
      { year: 2012, month: 6, housingcost: 234317 },
      { year: 2012, month: 7, housingcost: 235909 },
      { year: 2012, month: 8, housingcost: 237345 },
      { year: 2012, month: 9, housingcost: 238444 },
      { year: 2012, month: 10, housingcost: 239445 },
      { year: 2012, month: 11, housingcost: 240086 },
      { year: 2012, month: 12, housingcost: 241804 },
      { year: 2013, month: 1, housingcost: 243782 },
      { year: 2013, month: 2, housingcost: 246466 },
      { year: 2013, month: 3, housingcost: 248971 },
      { year: 2013, month: 4, housingcost: 252189 },
      { year: 2013, month: 5, housingcost: 255256 },
      { year: 2013, month: 6, housingcost: 258098 },
      { year: 2013, month: 7, housingcost: 260831 },
      { year: 2013, month: 8, housingcost: 263048 },
      { year: 2013, month: 9, housingcost: 265595 },
      { year: 2013, month: 10, housingcost: 268371 },
      { year: 2013, month: 11, housingcost: 272249 },
      { year: 2013, month: 12, housingcost: 275109 },
      { year: 2014, month: 1, housingcost: 277705 },
      { year: 2014, month: 2, housingcost: 279582 },
      { year: 2014, month: 3, housingcost: 281838 },
      { year: 2014, month: 4, housingcost: 283810 },
      { year: 2014, month: 5, housingcost: 286061 },
      { year: 2014, month: 6, housingcost: 288452 },
      { year: 2014, month: 7, housingcost: 290434 },
      { year: 2014, month: 8, housingcost: 292791 },
      { year: 2014, month: 9, housingcost: 295338 },
      { year: 2014, month: 10, housingcost: 298096 },
      { year: 2014, month: 11, housingcost: 300281 },
      { year: 2014, month: 12, housingcost: 302173 },
      { year: 2015, month: 1, housingcost: 303757 },
      { year: 2015, month: 2, housingcost: 305514 },
      { year: 2015, month: 3, housingcost: 307008 },
      { year: 2015, month: 4, housingcost: 308568 },
      { year: 2015, month: 5, housingcost: 310132 },
      { year: 2015, month: 6, housingcost: 312004 },
      { year: 2015, month: 7, housingcost: 314896 },
      { year: 2015, month: 8, housingcost: 318010 },
      { year: 2015, month: 9, housingcost: 320615 },
      { year: 2015, month: 10, housingcost: 322355 },
      { year: 2015, month: 11, housingcost: 323678 },
      { year: 2015, month: 12, housingcost: 326044 },
      { year: 2016, month: 1, housingcost: 329111 },
      { year: 2016, month: 2, housingcost: 331878 },
      { year: 2016, month: 3, housingcost: 334178 },
      { year: 2016, month: 4, housingcost: 335889 },
      { year: 2016, month: 5, housingcost: 337490 },
      { year: 2016, month: 6, housingcost: 338857 },
      { year: 2016, month: 7, housingcost: 340237 },
      { year: 2016, month: 8, housingcost: 340836 },
      { year: 2016, month: 9, housingcost: 341814 },
      { year: 2016, month: 10, housingcost: 343377 },
      { year: 2016, month: 11, housingcost: 345958 },
      { year: 2016, month: 12, housingcost: 347712 },
      { year: 2017, month: 1, housingcost: 348228 },
      { year: 2017, month: 2, housingcost: 349029 },
      { year: 2017, month: 3, housingcost: 350546 },
      { year: 2017, month: 4, housingcost: 352850 },
      { year: 2017, month: 5, housingcost: 354701 },
      { year: 2017, month: 6, housingcost: 355907 },
      { year: 2017, month: 7, housingcost: 356425 },
      { year: 2017, month: 8, housingcost: 356855 },
      { year: 2017, month: 9, housingcost: 357899 },
      { year: 2017, month: 10, housingcost: 359572 },
      { year: 2017, month: 11, housingcost: 361638 },
      { year: 2017, month: 12, housingcost: 363456 },
      { year: 2018, month: 1, housingcost: 364971 },
      { year: 2018, month: 2, housingcost: 365855 },
      { year: 2018, month: 3, housingcost: 366590 },
      { year: 2018, month: 4, housingcost: 366764 },
      { year: 2018, month: 5, housingcost: 367760 },
      { year: 2018, month: 6, housingcost: 369712 },
      { year: 2018, month: 7, housingcost: 371816 },
      { year: 2018, month: 8, housingcost: 374350 },
      { year: 2018, month: 9, housingcost: 375226 },
      { year: 2018, month: 10, housingcost: 377033 },
      { year: 2018, month: 11, housingcost: 377241 },
      { year: 2018, month: 12, housingcost: 378613 },
      { year: 2019, month: 1, housingcost: 379935 },
      { year: 2019, month: 2, housingcost: 382591 },
      { year: 2019, month: 3, housingcost: 383711 },
      { year: 2019, month: 4, housingcost: 384740 },
      { year: 2019, month: 5, housingcost: 385258 },
      { year: 2019, month: 6, housingcost: 386970 },
      { year: 2019, month: 7, housingcost: 388483 },
      { year: 2019, month: 8, housingcost: 389735 },
      { year: 2019, month: 9, housingcost: 391497 },
      { year: 2019, month: 10, housingcost: 392736 },
      { year: 2019, month: 11, housingcost: 395001 },
      { year: 2019, month: 12, housingcost: 396813 },
      { year: 2020, month: 1, housingcost: 399246 },
      { year: 2020, month: 2, housingcost: 401109 },
      { year: 2020, month: 3, housingcost: 404326 },
      { year: 2020, month: 4, housingcost: 407985 },
      { year: 2020, month: 5, housingcost: 411971 },
      { year: 2020, month: 6, housingcost: 414936 },
      { year: 2020, month: 7, housingcost: 418422 },
      { year: 2020, month: 8, housingcost: 422252 },
    ],
    covid: [],
    historicalweather: [
      { month: 'Sep', precipitation: 0.6, temperature: 86.4 },
      { month: 'Mar', precipitation: 0.43, temperature: 59.1 },
      { month: 'Nov', precipitation: 0.66, temperature: 56.7 },
      { month: 'Apr', precipitation: 6.52, temperature: 67.4 },
      { month: 'Dec', precipitation: 0.96, temperature: 55.0 },
      { month: 'Jan', precipitation: 3.51, temperature: 50.6 },
      { month: 'Jun', precipitation: 4.87, temperature: 82.0 },
      { month: 'Oct', precipitation: 3.43, temperature: 70.9 },
      { month: 'Jul', precipitation: 1.21, temperature: 85.1 },
      { month: 'May', precipitation: 8.57, temperature: 76.1 },
      { month: 'Feb', precipitation: 0.55, temperature: 56.1 },
      { month: 'Aug', precipitation: 0.54, temperature: 88.8 },
    ],
  },
];

export default function MultipleCityPage() {
  const [selectedCities, setSelectedCities] = useState(temp_data);
  return (
    <div className="multiple-city-page-container">
      <Header />
      <div className="multiple-city-page-chart-container">
        <div className="multiple-city-page-chart-menu">
          <button>Population Trend</button>
          <button>Apartment Prices</button>
          <button>Unemployment Rate</button>
        </div>
        <MultipleCityChart temp_data={temp_data} /> {/*chart*/}
      </div>
      <div className="multiple-city-page-selected-container">
        {temp_data.map(city => {
          return <MultipleCityCard city={city} selectCity={setSelectedCities} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
