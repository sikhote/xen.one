import React from 'react';
import { Global } from '@emotion/core';

const Home = () => {
  return (
    <div>
      <Global
        styles={{
          '*': {
            color: 'black',
          },
        }}
      />
      <ul className="bar">
        <li>
          <a href="http://arsenal.com/">A</a>
        </li>
        <li>
          <a href="https://www.americanexpress.com/">AE</a>
        </li>
        <li>
          <a href="https://www.codewars.com/dashboard">CW</a>
        </li>
        <li>
          <a href="https://www.dropbox.com/home">D</a>
        </li>
        <li>
          <a href="https://www.duolingo.com/">DL</a>
        </li>
        <li>
          <a href="http://feedly.com/i/latest">F</a>
        </li>
        <li>
          <a href="https://www.reddit.com/r/footballhighlights/">FH</a>
        </li>
        <li>
          <a href="https://github.com/sikhote/">GH</a>
        </li>
        <li>
          <a href="https://news.ycombinator.com/">HN</a>
        </li>
        <li>
          <a href="https://interplay.app/">I</a>
        </li>
        <li>
          <a href="http://jezebel.com/latest">J</a>
        </li>
        <li>
          <a href="http://icanhascheezburger.com/">LC</a>
        </li>
        <li>
          <a href="https://mail.protonmail.com/inbox">PM</a>
        </li>
        <li>
          <a href="https://sinclair.tech/">S</a>
        </li>
        <li>
          <a href="http://sdccu.com/">SDCCU</a>
        </li>
        <li>
          <a href="http://sandiego.craigslist.org/">SDCL</a>
        </li>
        <li>
          <a href="https://www.textnow.com/messaging">TN</a>
        </li>
      </ul>
      {/* style="overflow:hidden;margin:0;padding:0;width:408px;height:40px;" */}
      {/* frameborder="0" */}
      <iframe src="https://duckduckgo.com/search.html?focus=yes" />
      <br />
      <iframe src="https://duckduckgo.com/search.html?site=stackoverflow.com&prefill=Search stackoverflow.com" />
      <br />
      <iframe src="https://duckduckgo.com/search.html?site=reddit.com&prefill=Search reddit.com" />
      <br />
      <iframe src="https://duckduckgo.com/search.html?site=youtube.com&prefill=Search youtube.com" />

      <br />
      <br />
      <br />
      <h2 id="work">Work</h2>
      <ul>
        <li>
          <a href="https://www.remoteonly.org/">https://www.remoteonly.org</a>
        </li>
        <li>
          <a href="https://mail.google.com/mail/u/0/h/19a73ibnbrta/">
            Guild Mail
          </a>
        </li>
        <li>
          <a href="https://guildmortgage.okta.com/login/login.htm?fromURI=%2Fhome%2Fconfluence_onprem%2F0oa13b4edoNINH2Ii2p7%2F3523">
            Guild Confluence
          </a>
        </li>
        <li>
          <a href="https://guildmortgage.slack.com">Guild Slack</a>
        </li>
        <li>
          <a href="https://gitlab.guildmortgage.com/servicing/accounts-frontend">
            Guild GitLab
          </a>
        </li>
        <li>
          <a href="https://jira.guildmortgage.com/">Guild Jira</a>
        </li>
        <li>
          <a href="https://guildmortgage.okta.com">Guild Okta</a>
        </li>
      </ul>
      <h2 id="camping">Camping</h2>
      <ul>
        <li>
          <a href="http://www.rivcoparks.org/parks/idyllwild/idyllwild-park-home/">
            Idyllwild Park – Home « Riverside County Regional Park &amp;
            Open-Space District
          </a>
        </li>
      </ul>
      <h2 id="coding">Coding</h2>
      <ul>
        <li>
          <a href="http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/pdf/">
            Regular Expression Cheat Sheet
          </a>
        </li>
        <li>
          <a href="http://realfavicongenerator.net/">
            Favicon Generator - Generate favicon pictures and HTML
          </a>
        </li>
        <li>
          <a href="http://learnyouahaskell.com/input-and-output#hello-world">
            Input and Output - Learn You a Haskell for Great Good!
          </a>
        </li>
        <li>
          <a href="http://book.realworldhaskell.org/">Real World Haskell</a>
        </li>
        <li>
          <a href="http://www.permadi.com/tutorial/jsFunc/index2.html">
            Web Developer Introduction To Features of JavaScript
            &quot;Function&quot; Objects
          </a>
        </li>
        <li>
          <a href="http://vim.rtorr.com/">Vim Cheat Sheet - English</a>
        </li>
        <li>
          <a href="http://www.howtogeek.com/howto/ubuntu/">
            Keyboard Shortcuts for Bash ( Command Shell for Ubuntu, Debian,
            Suse, Redhat, Linux, etc)
          </a>
        </li>
        <li>
          <a href="http://www.lagmonster.org/docs/vi2.html">Vi Cheat Sheet</a>
        </li>
      </ul>
      <h2 id="chess">Chess</h2>
      <ul>
        <li>
          <a href="http://www.chess.com/forum/view/general/kasparov-vs-fischer">
            Kasparov vs Fischer - Chess.com
          </a>
        </li>
        <li>
          <a href="http://www.chessgames.com/perl/chessgame?gid=1019060">
            Paul Morphy vs Adolf Anderssen (1858) &quot;Keep Your Eye on the
            Paul&quot;
          </a>
        </li>
        <li>
          <a href="http://www.chessgames.com/perl/chessgame?gid=1242884">
            Louis Paulsen vs Paul Morphy (1857) &quot;Morphy Us&quot;
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Morphy_versus_the_Duke_of_Brunswick_and_Count_Isouard">
            Morphy versus the Duke of Brunswick and Count Isouard - Wikipedia,
            the free encyclopedia
          </a>
        </li>
        <li>
          <a href="http://en.wikipedia.org/wiki/Jos%C3%A9_Ra%C3%BAl_Capablanca">
            José Raúl Capablanca - Wikipedia, the free encyclopedia
          </a>
        </li>
      </ul>
      <h2 id="events">Events</h2>
      <ul>
        <li>
          <a href="http://sandiegotheatres.org/calendar-5/">
            Calendar | San Diego Theatres
          </a>
        </li>
      </ul>
      <h2 id="interesting">Interesting</h2>
      <ul>
        <li>
          <a href="http://www.core77.com/">
            Core77 / industrial design magazine + resource / home
          </a>
        </li>
        <li>
          <a href="http://inhabitat.com/">
            Inhabitat - Green Design Will Save the World
          </a>
        </li>
        <li>
          <a href="http://www.huffingtonpost.com/women/">
            Women News and Opinion on The Huffington Post
          </a>
        </li>
        <li>
          <a href="http://www.popularmechanics.com/_mobile/home/">
            Home How To - DIY Home Improvement - Popular Mechanics
          </a>
        </li>
        <li>
          <a href="http://thewirecutter.com/">The Wirecutter</a>
        </li>
        <li>
          <a href="http://smittenkitchen.com/">smitten kitchen</a>
        </li>
        <li>
          <a href="http://www.fastcoexist.com/">
            Co.Exist: World changing ideas and innovation
          </a>
        </li>
        <li>
          <a href="http://windows.microsoft.com/en-us/windows/wallpaper">
            Desktop backgrounds - Microsoft Windows
          </a>
        </li>
      </ul>
      <h2 id="gaming">Gaming</h2>
      <ul>
        <li>
          <a href="http://www.theisozone.com/downloads/playstation/ps2-isos/page-16/">
            Playstation 2 Isos, PS2 Roms • Page 16 • Downloads @ The Iso Zone
          </a>
        </li>
      </ul>
      <h2 id="football">Football</h2>
      <ul>
        <li>
          <a href="http://8888lounge.blogspot.com/">
            8888&#39;s Lounge. Welcome Everyone. :-)
          </a>
        </li>
      </ul>
      <h2 id="guitar">Guitar</h2>
      <ul>
        <li>
          <a href="http://tabs.ultimate-guitar.com/c/city_and_colour/the_girl_crd.htm">
            The Girl Chords by City And Colour @ Ultimate-Guitar.Com
          </a>
        </li>
        <li>
          <a href="http://tabs.ultimate-guitar.com/b/bon_iver/skinny_love_crd_835053id_11062009date.htm">
            Skinny Love Chords by Bon Iver @ Ultimate-Guitar.Com
          </a>
        </li>
        <li>
          <a href="http://tabs.ultimate-guitar.com/t/the_neighbourhood/sweater_weather_crd.htm">
            Sweater Weather Chords by The Neighbourhood @ Ultimate-Guitar.Com
          </a>
        </li>
        <li>
          <a href="http://tabs.ultimate-guitar.com/o/old_crow_medicine_show/wagon_wheel_ver3_crd.htm">
            Wagon Wheel Chords (ver 3) by Old Crow Medicine Show @
            Ultimate-Guitar.Com
          </a>
        </li>
        <li>
          <a href="http://tabs.ultimate-guitar.com/t/the_xx/angels_ver2_crd.htm">
            Angels Chords (ver 2) by The Xx @ Ultimate-Guitar.Com
          </a>
        </li>
        <li>
          <a href="http://tabs.ultimate-guitar.com/e/edward_sharpe_and_the_magnetic_zeros/home_tab.htm">
            Home Tab by Edward Sharpe And The Magnetic Zeros @
            Ultimate-Guitar.Com
          </a>
        </li>
      </ul>
      <h2 id="purchases">Purchases</h2>
      <ul>
        <li>
          <a href="http://strongholdgames.com/store/board-games/survive-escape-from-atlantis/">
            Stronghold Games » Survive: Escape from Atlantis!
          </a>
        </li>
        <li>
          <a href="http://strongholdgames.com/store/board-games/confusion-espionage-and-deception-in-the-cold-war/">
            Stronghold Games » Confusion: Espionage and Deception in the Cold
            War
          </a>
        </li>
        <li>
          <a href="http://playtmg.com/products/train-of-thought">
            Train of Thought — Tasty Minstrel Games
          </a>
        </li>
        <li>
          <a href="http://www.wegotways.com/kinfolkbicycles/">
            KinfolkBicycleCo.
          </a>
        </li>
        <li>
          <a href="http://propercloth.com/">
            Custom Dress Shirts, Fitted Dress Shirt, Slim Fit Shirt, Free
            Shipping
          </a>
        </li>
        <li>
          <a href="http://www.kickstarter.com/projects/mijlo/a-better-backpack-sustainable-design-sustainable-f">
            A Better Backpack: Sustainable Design - Sustainable Future by Daniel
            Eckler — Kickstarter
          </a>
        </li>
        <li>
          <a href="http://www.fjallraven.us/collections/numbers-bags/?view=all">
            Numbers Bags | Fjällräven
          </a>
        </li>
        <li>
          <a href="http://www.urbanears.com/headphones/humlan/humlan-moss/">
            Humlan Moss | Urbanears
          </a>
        </li>
        <li>
          <a href="http://www.dyson.com/store/lighting.aspx">
            Shop online for Dyson AirMultiplier™ fans and fan heaters | Dyson
            Shop
          </a>
        </li>
        <li>
          <a href="https://www.vitsoe.com/gb">Vitsœ</a>
        </li>
        <li>
          <a href="http://www.wearpact.com/">
            PACT Super Soft Organic Cotton Premium Underwear, Socks and Tees
          </a>
        </li>
        <li>
          <a href="http://en.plusminuszero.jp/">±0 - Home</a>
        </li>
        <li>
          <a href="http://www.avenuelifestyle.com/bedroom-makeover-before-after/">
            Bedroom Makeover: Before &amp; AFTER! - Avenue Lifestyle Avenue
            Lifestyle
          </a>
        </li>
        <li>
          <a href="https://instagram.com/p/uk9W45Q1Ho/">
            Cleo Scheulderman on Instagram: “#bedroom #black #white #grey #photo
            #display @bymolle #combitex @vtwonen #november styling:
            #cleoscheulderman photo: #alexandervanberge”
          </a>
        </li>
        <li>
          <a href="http://www.mountainhardwear.com/megalamina-20-regular-OU8521.html?cgid=equipment-sleepingBags-5to20&amp;dwvar_OU8521_variationColor=409#start=10">
            MegaLamina™ 20 (Regular) | MountainHardwear.com
          </a>
        </li>
        <li>
          <a href="http://www.sogo-seibu.jp/byn/en/items/totte_plate_round_plate.html">
            totte-plate round plate by｜n（バイエヌ）
          </a>
        </li>
        <li>
          <a href="http://www.crateandbarrel.com/linea-ii-floor-mirror/s474003">
            Linea Teak Floor Mirror | Crate and Barrel
          </a>
        </li>
        <li>
          <a href="https://www.akronstreet.com/collections/the-collection">
            The Collection | Akron Street
          </a>
        </li>
        <li>
          <a href="http://www.brooksengland.com/catalogue-and-shop/saddles/touring+%26+trekking/Cambium+C17+Ltd+Edition/#sidecontents">
            BROOKS ENGLAND LTD. | TOURING+&amp;+TREKKING |
            CAMBIUM+C17+LTD+EDITION
          </a>
        </li>
      </ul>
      <h2 id="songs">Songs</h2>
      <ul>
        <li>
          <a href="http://bcmoney-mobiletv.com/lyrics/fred-penner/-/sandwiches.html">
            Sandwiches
          </a>
        </li>
      </ul>
      <h2 id="transit">Transit</h2>
      <ul>
        <li>
          <a href="http://www.gonctd.com/coaster">
            NCTD COASTER commuter train schedule and description
          </a>
        </li>
      </ul>
      <h2 id="weather">Weather</h2>
      <ul>
        <li>
          <a href="http://wavecast.com/tides/">WaveCast : Tides</a>
        </li>
        <li>
          <a href="http://wavecast.com/wind/current/socal.shtml">
            WaveCast : Winds : Current : Southern California
          </a>
        </li>
        <li>
          <a href="http://www.nodc.noaa.gov/dsdt/cwtg/spac.html">
            Coastal Water Temperature Guide
          </a>
        </li>
        <li>
          <a href="http://www.stormsurf.com/cgi-bin/4cast.cgi?ID=enp.SGX01">
            Buoy Forecast SGX01 (STORMSURF)
          </a>
        </li>
        <li>
          <a href="http://forecasts.surfingmagazine.com/#place=33.715201644740844_-119.575195_7_1422_height_none_Sat_-1">
            SwellWatch 3D - Surf Report and Forecast
          </a>
        </li>
        <li>
          <a href="http://www.stormsurf.com/page2/forecast/forecast/current.shtml">
            Pacific Storm &amp; Surf Forecast (Stormsurf)
          </a>
        </li>
        <li>
          <a href="http://www.surfline.com/surf-forecasts/southern-california/north-san%20diego_2144">
            North San Diego Surf Forecast | SURFLINE.COM
          </a>
        </li>
        <li>
          <a href="http://www.stormsurf.com/page2/links/scalrprt.shtml">
            South California Surf Report (Stormsurf)
          </a>
        </li>
        <li>
          <a href="http://www.lajollasurf.org/oceanside.html">
            Oceanside, CA Buoy Wave Period Bands
          </a>
        </li>
        <li>
          <a href="http://www.lajollasurf.org/torreypines.html">
            Torrey Pines Outer Wave Period Bands
          </a>
        </li>
        <li>
          <a href="https://www.swellinfo.com/surf-forecast/san-diego-california-north">
            Swell Info
          </a>
        </li>
      </ul>
      <h2 id="workouts">Workouts</h2>
      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=8YXglW9kvH4">
            18 Min Sciatica Exercises for Leg Pain Relief - Sciatica Relief
            &amp; Treatment for Sciatic Nerve Pain - YouTube
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=b4ZnvU3QkRM">
            25 Min Lower Back Exercises for Lower Back Pain Relief Stretches for
            Lower Back Strengthening Rehab - YouTube
          </a>
        </li>
      </ul>
      <h2 id="cooking">Cooking</h2>
      <ul>
        <li>
          <a href="http://www.astackofdishes.com/the-famous-ny-times-no-knead-bread/">
            {'The {Famous} NY Times- No Knead Bread - A Stack of Dishes'}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
