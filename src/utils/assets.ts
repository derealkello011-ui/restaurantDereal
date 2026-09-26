import android from '@/assets/resources/android.jpg';
import chrisBaeDemo from '@/assets/resources/chris_bae-demo.jpg';
import chrisBae from '@/assets/resources/chris_bae.jpg';
import hacking from '@/assets/resources/hacking.jpg';
import jsCourse from '@/assets/resources/js_course.jpg';
import mariaSurfer from '@/assets/resources/maria_surfer.jpg';
import mariaSurfer2 from '@/assets/resources/maria_surfer2.jpg';

import adidas from '@/assets/apps/adidas.jpg';
import araba from '@/assets/apps/araba.jpg';
import battleGames from '@/assets/apps/battleGames.jpg';
import bloodstrike from '@/assets/apps/bloodstrike.jpg';
import cn from '@/assets/apps/cartoonN.jpg';
import derealCode from '@/assets/apps/derealcode.jpg';
import derealFinite from '@/assets/apps/derealFinite.jpg';
import derealNight from '@/assets/apps/derealNight.jpg';
import drive from '@/assets/apps/drive.jpg';
import eaSports from '@/assets/apps/eaSports.jpg';
import faith from '@/assets/apps/faith.jpg';
import fortnite from '@/assets/apps/fortnite.jpg';
import freeFire from '@/assets/apps/freeFire.jpg';
import godOfWar from '@/assets/apps/GodOfWar.jpg';
import gtaV from '@/assets/apps/gtaV.jpg';
import gtaVC from '@/assets/apps/gtaVC.jpg';
import gtaVI from '@/assets/apps/gtaVI.jpg';
import leagueLegends from '@/assets/apps/leagueLengends.jpg';
import mineCraft from '@/assets/apps/mineCraft.jpg';
import mk4 from '@/assets/apps/mk4.jpg';
import modernCombat from '@/assets/apps/modernCombat.jpg';
import moodle from '@/assets/apps/moodle.jpg';
import msWord from '@/assets/apps/msWord.jpg';
import pubg from '@/assets/apps/pubg.jpg';
import redDead from '@/assets/apps/redDead.jpg';
import rockstar from '@/assets/apps/rockstar.jpg';
import smoker from '@/assets/apps/smoker.jpg';


export const images = [
    chrisBae, jsCourse,
    hacking, mariaSurfer,
    mariaSurfer2, android,
    chrisBaeDemo
] as const;

export const apps = [
    adidas, araba, battleGames,
    bloodstrike, cn, derealCode, derealFinite,
    derealNight, drive, eaSports, faith,
    fortnite, freeFire, godOfWar, gtaV,
    gtaVC, gtaVI, leagueLegends, mineCraft,
    mk4, modernCombat, moodle, msWord,
    pubg, redDead, rockstar, smoker,
] as const;

// Named exports so individual app images can be pulled by name
// (e.g. in allData.ts) without indexing into the apps array.
export {
    adidas, araba, battleGames, bloodstrike, cn,
    derealCode, derealFinite, derealNight, drive,
    eaSports, faith, fortnite, freeFire, godOfWar,
    gtaV, gtaVC, gtaVI, leagueLegends, mineCraft,
    mk4, modernCombat, moodle, msWord, pubg,
    redDead, rockstar, smoker
};
