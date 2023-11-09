
// carousel animation/slider

let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (let i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

//popup


var articleData = [
    {//0
        title: "How Smith Rowe has come back stronger?",
        imgdescription: "Emile Smith Rowe has recently returned from a lengthy injury lay-off",
        img: "../images/leagues/smithrow.jpg",
        body: "It is a measure of the standards Emile Smith Rowe holds himself to that, in his first two days of full training following groin surgery and a gruelling, three-month injury lay-off in late December, he could be heard berating himself over his performance.During a small-sided match at the end of the session in question, Smith Rowe had picked up the ball and tried to drive past a team-mate, only to find he couldn't shake him off, the running power that has long been a feature of his game not quite there yet.",
        body2: "In his desperation to make an instant impact, he wondered whether it was gone for good, a concern which brought smiles from staff members as they explained that, actually, they would be worried about his team-mates if he was immediately breezing past them.The 22-year-old was reminded to be patient with his body. He had come through a lengthy rehabilitation programme following his operation but, back on the grass, training with a team in peak condition, he would need more time to get up to full speed.",
        body3: "Happily, that time has now arrived. Arsenal have been cautious with him, managing his workload carefully after he strained his thigh in January, but, to quote William Saliba in a clip from London Colney that circulated online last week: 'The Smith is back.'",
        date: "10 MAR 2023"

    },
    { //1
        title: "Silva: Leno among top three PL 'keepers | Pereira 'so important'",
        imgdescription: "Fulham manager discusses how his new signings have hit the ground",
        img: "../images/leagues/1.jpg",
        body: "Fulham host league leaders Arsenal on Sunday and enter the weekend seventh in the Premier League - five points clear of big-spenders Chelsea. 'It's been fantastic,' says Marco Silva.",
        body2: "The Cottagers have defined the term 'yo-yo club' in recent times, bouncing from the Premier League to the Championship for six years running, but the club is bucking that trend and pushing for European qualification instead of survival this term.In an exclusive interview with Sky Sports, Silva emphasises how breaking that top-flight hoodoo was paramount: 'This season is probably one of the most important seasons for us. It's really important for us to remain in the Premier League and to start being consistent in this division'",
        body3: "The Portuguese has also overseen an FA Cup run which has seen his side book a quarter-final spot against Manchester United next week. 'Of course, we are really pleased with our season so far. We keep adapting every single week for the challenge. The league position and results are a consequence of that,' says Silva.",
        date: "10 MAR 2023"

    },
    { //2
        title: "FPL tips and advice: Is now the time for the wildcard?",
        imgdescription: "kane, kevin and salah",
        img: "../images/leagues/2.jpg",
        body: "Fantasy Premier League 2022/23: Gameweek 27 tips and advice from experts.Sky Sports continues its weekly column, bringing you essential tips from the best Fantasy Premier League managers in the world.In our latest column, Holly Shand and Sam from FPL Family discuss all things FPL ahead of the latest gameweek, including wildcard tactics and whether this is a week to include players from Brighton and Brentford.",
        body2: "Holly Shand: Potentially. Using the wildcard will allow you to maximise for the doubles in front of us, as well as navigating Gameweek 28 without using a Free Hit. There will be opportunities to wildcard later in the season, but given the unsettled period in the fixtures we know in front of us, I don't see a good reason to keep. That being said, if you already have some players from Brentford and Brighton plus two free transfers you may be able to navigate through this period without it, as it is somewhat team dependent.",
        body3: "Sam from FPL Family: I'm still holding my Wildcard through to GW29 so I can really target the biggest double gameweek of the season and have the information about what Gameweek 32 will look like. If managers are struggling for doubling players this week and have a team which looks hard to navigate for Gameweek 28 however, then this could be a great week for a wildcard.",
        date: "10 MAR 2023"

    },
    { //3
        title: "Manchester United clinch Carabao Cup victory with stunning performance against rivals in thrilling final",
        imgdescription: "man utd players celebrating their carboracup",
        img: "../images/leagues/carboracup.jpg",
        body: "There are differing definitions of a trophy drought at these two clubs. It felt like a long time ago that Manchester United were winning this competition and the Europa League under José Mourinho. It was 2017 and the barren years since then had added up to their longest sequence without silverware since the early 1980s.Newcastle, of course, could see that and reraise it to 54 years – the chasm to their famous Fairs Cup triumph. This final, Newcastle’s first since the FA Cup of 1999 when they took on the same opponents, was all about who could chart fresh territory, who could own the occasion. As in 1999, it was the Reds – and by the same scoreline.",
        body2: "Erik ten Hag was the picture of elation when it was all over, dancing a South American jig with Lisandro Martínez and Antony, his Old Trafford revolution given the hard edge that he had demanded. And, really, it was all pretty comfortable after a two-goal salvo towards the end of the first half.The excellent Casemiro got the first with a towering header, Marcus Rashford forced the second with a shot that deflected off Sven Botman to wrongfoot the unfortunate Loris Karius and United were happy for the second half to become a nonevent, a gradual countdown to glory.",
        body3: "Ten Hag’s team have lost only once in 21 matches, they are alive and kicking in the last 16 of both the FA Cup and Europa League and they are sitting pretty in third in the Premier League. It is looking and feeling extremely sweet. And if Avram Glazer, who was picked out by the cameras here, and his family could now leave as the United fans demanded throughout Newcastle have been transformed since the Saudi Arabia-led takeover of October 2021, Eddie Howe benefiting from a £240m spend on new players and shaping a team of steel and spirit, one that has proved extremely difficult to break down. But the cold truth was that after a decent start, they went with a whimper.",
        date: "10 MAR 2023"

    },
    { //4
        title: "Arsenal secure crucial victory against Everton, extend lead to five points and take pole position in Premier League title race",
        imgdescription: "aresnal players celebrating a goal against everton",
        img: "../images/leagues/arsvseve.jpg",
        body: "Arsenal have beaten Everton 4-0 to move five points clear of Manchester City at the top of the Premier League table.No other players under the age of 22 have scored more than five Premier League goals this season but both Saka and Martinelli reached double figures with first-half strikes in a comfortable 4-0 victory.",
        body2: "Captain Martin Odegaard added a third before Martinelli tapped in to put the gloss on the win and leave Arsenal in a strong position as they pursue a first title in 19 years.This was Arsenal’s game in hand, the original match called off following the death of the Queen, and they went into the contest having lost to the struggling Toffees last month.",
        body3: "That was Sean Dyche’s first game in charge of Everton and things appeared to be on the up, but this loss leaves the visitors inside the relegation zone.Arteta has Arsenal purring again after a loss at Goodison Park knocked the confidence of his players, the Spaniard ensuring it was a blip rather than a slump as they open up a healthy lead over Manchester City at the top of the table again.Everton arrived with a game plan which stifled Arsenal’s attacking intent while also giving themselves the chance to launch the odd foray forward.Saka, in particular, was being well-marshalled by Vitalii Mykolenko and the England forward was having very little impact on proceedings.",
        date: "10 MAR 2023"

    },
    { //5
        title: "Liverpool vs Man Utd: A pivotal match for Liverpool's title hopes as a victory could boost their confidence and reignite their campaign",
        imgdescription: "liverpool vs man utd poster",
        img: "../images/leagues/livmun.jpg",
        body: "Manchester United vs Liverpool is one of the most exciting derbies in English football and the world, pitting the country's two most successful clubs against one another.The game is usually a heated affair, and previous iterations have been fiery and passionate – understandably so, as the rivalry goes back decades, and has seen big performances from some of the greatest players in the game's history.",
        body2: "The two clubs are the most successful sides in England, and each boast glittering trophy cabinets. Manchester United overtook the Liverpool as England's most successful club in the '90s and 2000s, winning 23 league titles and 23 domestic cups – but Liverpool still boast six European Cup/Champions League trophies to United's three.Moreover, Liverpool won their first ever Premier League title (and 19th league) in 2020, while Man Utd have recently broke their six-year trophy drought with the sixth League Cup win.",
        body3: "Liverpool dominated Manchester United in the Northwest derby meetings in the 2021-22 Premier League season, with an aggregate score of 9-0. In the last encounter between the two sides, Liverpool made history with a 7-0 demolition of Man United at Anfield.Besides the 4-0 win over the Reds in a pre-season friendly, United also beat Liverpool 2-1 at Old Trafford in the first Premier League meeting between the pair.",
        date: "10 MAR 2023"

    },
    { //6
        title: "Barcelona take the first leg advantage with a stunning win against arch-rivals Real Madrid in Copa del Rey semi-final",
        imgdescription: "lewandowski chase after the ball",
        img: "../images/leagues/elclasico.jpg",
        body: "Barcelona bounced out back from a bad week in the best way, handing El Clasico rivals Real Madrid their first home loss in nearly a year to take a 1-0 first leg advantage in the Copa del Rey semifinals.Real had not lost at the Bernabeu since falling 3-2 to Chelsea in the Champions League quarterfinal second leg, and even that “loss” ended with Real moving onto the next round given the 3-1 win in a London-based first leg.",
        body2: "Carlo Ancelotti saw his side dismantle Liverpool 5-2 at Anfield in the Champions League last week and they battled back to draw at home against 10-man Atletico Madrid in La Liga over the weekend. Real beat Barcelona 3-1 in the La Liga meeting between the two teams earlier this season but they currently sit seven points behind league leaders Barcelona.Here’s everything you need for the first leg of the Copa del Rey semifinal at the Santiago Bernabeu, with the second leg taking place at the Camp Nou on Wednesday, Apr. 5.",
        body3: "Veteran Luka Modric continues to defy logic with his displays in midfield, while Vinicius Jr and Karim Benzema have been in fine form in attack. Fede Valverde and Eduardo Camavinga have been superb in recent weeks too. Defensively Real are short of options but Nacho has filled in admirably at full back.Barcelona continue to chop and change their team but they will be without top scorer Robert Lewandowski through injury for this clash. Gavi and Pedri are essential to how they play under Xavi but the latter is missing, which is a big blow too. A special shoutout to goalkeeper Marc-Andre Ter Stegen as Barcelona’s defense has allowed just eight goals in 23 La Liga games so far this season. Eight.",
        date: "10 MAR 2023"

    },
    { //7
        title: "Real Madrid manager Carlo Ancelotti is reportedly open to becoming the next boss of Brazil.",
        imgdescription: "real madrid manager ancelotti",
        img: "../images/leagues/ancelotti.jpg",
        body: "Brazil federation, Real Madrid deny report Carlo Ancelotti has given green light to becoming Brazil coach. The Brazilian Football Confederation has denied an ESPN Brazil report that Real Madrid coach Carlo Ancelotti has given the OK to becoming the new coach of the Brazil men's national team.",
        body2: "The experienced Ancelotti -- who has been in charge of Real Madrid since 2021 -- has coached clubs such as Juventus, AC Milan, Chelsea, Paris Saint-Germain and Bayern Munich in a 28-year managerial career.No formal agreement has been reached, sources said, but Ancelotti had responded positively to the CBF's interest.",
        body3: "'The Brazilian Football Confederation (CBF) states that the news released this Friday that the coach of Real Madrid, the Italian Carlo Ancelotti, is the new coach of the Brazil national team is unfounded,' the CBF said in a statement.'President Ednaldo Rodrigues stands by the statements given on Wednesday, after the draw for the matches in the Copa do Brasil. At the time, the president ruled out speculation, saying that the matter will be dealt with transparently and that the coach chosen will be announced at the right time. Ancelotti coached Madrid to a Champions League and LaLiga double last season, with the team currently second in the league -- eight points behind leaders Barcelona -- and set to play Al Hilal in the Club World Cup final on Saturday.",
        date: "10 MAR 2023"

    },
    { //8
        title: "Netflix teams up with LaLiga to develop its first sports docuseries in Spain",
        imgdescription: "Netflix documentary poster for laliga",
        img: "../images/leagues/netflix.jpg",
        body: "Madrid, February 17 - LaLiga is not just football: it is passion, it is emotion. LaLiga is decided on the football field but it is also lived off the football field: in the locker rooms, in the bleachers, on the outskirts of the stadium on a match day. LaLiga will be the center of the first sports series that Netflix will produce in Spain.",
        body2: " documentary series, currently in pre-production, will focus on the 2023-2024 LaLiga Competition, and will be launched worldwide on Netflix next year.  Similar to Netflix’s growing slate of sports programming such as Formula 1: Drive to Survive and Break Point, the series will take an inside look at everything that happens in the Professional Football League behind the scenes and the more personal stories of one of the most followed leagues in the world.'For LaLiga, to be the star of Netflix's first sports series in Spain is a unique opportunity to take our football beyond the fans, to share with the world the excitement of the sport we love, and the chance for all our fans to see LaLiga from a totally different angle,' added Óscar Mayo, Executive Director of LaLiga.",
        body3: "At Netflix, we have always been committed to bringing must watch series and films to our members around the world. We are very proud and excited to share this project with LaLiga, which is an unprecedented opportunity to experience the excitement of one of the most exciting sporting competitions on the planet, first-hand",
        date: "10 MAR 2023"

    },
    { //9
        title: "LaLiga reports alleged match-fixing to police",
        imgdescription: "la liga poster",
        img: "../images/leagues/4.jpg",
        body: "The league noted that “match-fixing and proposing match-fixing is a crime” in Spain. Last month, Spanish police detained six people for their alleged involvement in a scheme to possibly fix a Copa del Rey game in 2021. The game under investigation was Levante's 8-0 victory at lower-tier Huracan Melilla.",
        body2: "LaLiga has filed a complaint with Spanish authorities after former player Aday Benitez said he was offered a bribe to lose a second division game while on the books of Girona.The former Spanish winger said: 'In football, there were briefcases, hidden payments... They have personally offered me that, and I have not accepted them.",
        body3: "LaLiga has worked in recent years with law enforcement and technology experts to ensure that matches are free from corruption as well as giving educational workshops to players to prevent match-fixing.While the number of cases of match-fixing in professional football has significantly fallen, last month, LaLiga confirmed an investigation is underway regarding a possible case of match-fixing during last season's Copa del Rey.",
        date: "10 MAR 2023"

    },
    { //10
        title: " Barca's Dembele to miss LaLiga Clasico",
        imgdescription: "Dembele with thigh injury ",
        img: "../images/leagues/5.jpg",
        body: "Ousmane Dembele will miss Barcelona's El Clasico clash with Real Madrid in LaLiga on March 19, sources have told ESPN, as the winger continues his recovery from a thigh injury.Dembele was hurt in Barca's 1-0 win at Girona on Jan. 28, and was initially expected to be unavailable for between three and four weeks.",
        body2: " Dembele is progressing well and has not suffered an injury setback, but club medical staff wanted to take a conservative approach to ensure that he would be fit for the final stretch of the season.Star forward Robert Lewandowski and midfielder Pedri are both expected to be available for the Clasico, sources said, and are now in the final stages of their recovery processes.",
        body3: "Madrid's Karim Benzema -- who has struggled with a series of muscular injuries this season -- did not train on Thursday, while defenders Ferland Mendy and David Alaba are also injured.Barca are top of LaLiga, nine points clear ahead of Madrid, and have the advantage in their Copa del Rey semifinal after beating Madrid 1-0 in the first leg at the Bernabeu last week.",
        date: "10 MAR 2023"

    },
    { //11
        title: "As Joaquin's playing time drops at Real Betis, his TV stardom booms",
        imgdescription: "Joaquin holding a trophy",
        img: "../images/leagues/6.jpg",
        body: "Joaquin Sanchez knows about performing under pressure.The Real Betis winger and club captain, still playing at 41, has seen more Seville Derbies -- LaLiga's fieriest fixture -- than any other player. He's taken and missed a decisive penalty in a World Cup quarterfinal. Last season he helped win his club's first trophy in 17 years, coming off the bench as Betis beat Valencia in the Copa del Rey final.",
        body2: "As a 20-year career in football nears its end, Joaquin has taken on these new challenges in his latest challenge: finding success, and good ratings, as a prime-time television presenter.So far, he's proven just as effective in front of the TV cameras as in a Betis shirt. Joaquin's debut show 'El Novato' -- 'The Rookie' in English -- saw him paired with a different Spanish celebrity each week, trying and often failing to learn their profession. It was a smash hit last fall for Antena 3, Spain's most-watched channel.",
        body3: "The debut episode earned an unprecedented 30% audience share and got just under three million viewers in October -- a significant figure for Spain, a country with a population of 47 million. A second series, 'La Penultima y me voy,' is a more conventional documentary following Joaquin's home life with wife Susana and two daughters that is already on the air.",
        date: "10 MAR 2023"

    },
    { //12
        title: "CAIRO INTERNATIONAL",
        imgdescription: "CAIRO INTERNATIONAL STADIUM",
        img: "../images/leagues/stadium1.jpg",
        body: "Cairo International Stadium formerly known as Nasser Stadium, is an Olympic-standard, multi-use stadium with an all-seated capacity of 75,000.The architect of the stadium is the German Werner March, who had built from 1934 to 1936 the Olympic Stadium in Berlin. The engineering and construction supervision work of the stadium was performed by ACE Moharram Bakhoum. It is the 69th largest stadium in the world. Located in Nasr City; a suburb north east of Cairo, it was completed in 1960, and was inaugurated by President Gamal Abd El Nasser on 23 July that year, the eighth anniversary of the Egyptian Revolution of 1952. Zamalek SC and Al Ahly use the stadium for most of their home games.",
        body2: "Hosts matches for the Egypt national football team.Hosted many matches in the 2006 Africa Cup of Nations and the final which Egypt won against Ivory Coast 4–2 in penalties shootouts after a 0–0 draw in extra time.It was updated to host the 2006 Africa Cup of Nations to meet the CAF standard stadiums making it all-seated which decreased the capacity from 85,000 to 75,000 and making blue zigzag highlights on the seats, later on the Olympic track was changed from blue to orange it was first seen on 14 November when Egypt faced Algeria in the 2010 FIFA World Cup qualification (CAF) which Egypt won 2–0.It was one of the stadiums along with Borg El Arab Stadium and 5 other planned stadiums in the failed Egyptian bid to host the 2010 FIFA World Cup.",
        body3: "The stadium is located in Nasr City; a suburb north east of Cairo and can be reached by underground via the dedicated Cairo stadium subway station at line 3 and a Cairo Monorail station that will be opened in 2023, located in front of the stadium",
        date: "10 MAR 2023"

    },
    { //13
        title: "SANTIAGO BERNABEU",
        imgdescription: "SANTIAGO BERNABEU STADIUM",
        img: "../images/leagues/stadium2.jpg",
        body: "The Santiago Bernabéu Stadium (Spanish: Estadio Santiago Bernabéu, [esˈtaðjo sanˈtjaɣo βeɾnaˈβew]  is a football stadium in Madrid, Spain. With a current seating capacity of 81,044, it has been the home stadium of Real Madrid since its completion in 1947.[2] It is the second-largest stadium in Spain and third-largest home to a top-flight European club after Camp Nou and Westfalenstadion.",
        body2: "Named after footballer and legendary Real Madrid president Santiago Bernabéu (1895–1978), the stadium is one of the world's most famous football venues. It has hosted the final of the European Cup/UEFA Champions League on four occasions: in 1957, 1969, 1980, 2010.[6] The stadium also hosted the second leg of the 2018 Copa Libertadores Finals, making Santiago Bernabéu the first (and only) stadium to host the two most important premier continental cup finals (UEFA Champions League and Copa Libertadores).The final matches for the 1964 European Nations' Cup and the 1982 FIFA World Cup were also held at the Bernabéu, making it the first stadium in Europe to host both a UEFA Euro final and a FIFA World Cup final.",
        body3: "On 22 June 1944, the Banco Mercantil e Industrial bank granted credit to Santiago Bernabéu and Rafael Salgado for the purchase of the land adjacent to the old Chamartín Stadium. On 5 September 1944, architects Manuel Muñoz Monasterio and Luis Alemany Soler were hired and the structure on the site began to give way to the new stadium. On 27 October 1944, construction work on the stadium began, which was being built partly on the old site and on the grounds of Villa Ulpiana. In the meantime, Real Madrid played its home games at the Estadio Metropolitano in the 1946–47 season and at the start of the 1947–48 season.",
        date: "10 MAR 2023"

    },
    { //14
        title: "NOU CAMP",
        imgdescription: "NOU CAMP STADIUM",
        img: "../images/leagues/stadium3.jpg",
        body: "It is a football stadium in Barcelona, Spain. It has been the home stadium of FC Barcelona since its completion in 1957. With a current seating capacity of 99,354.it is the largest stadium in Spain and Europe, and the third largest association football stadium in the world.",
        body2: "It has hosted two European Cup/Champions League finals in 1989 and 1999, two European Cup Winners' Cup finals, four Inter-Cities Fairs Cup final games, five UEFA Super Cup games, four Copa del Rey finals, two Copa de la Liga finals, and twenty-one Supercopa de España finals. It also hosted five matches in the 1982 FIFA World Cup (including the opening game), two out of four matches at the 1964 European Nations' Cup, and the football tournament's final at the 1992 Summer Olympics.On 15 March 2022, it was announced that music streaming service Spotify had reached a deal with FC Barcelona to acquire the naming rights to the stadium in a deal worth $310 million. Following the approval of the sponsorship agreement with Spotify by FC Barcelona's Extraordinary Assembly of Delegate Members on 3 April 2022, the stadium was officially renamed on 1 July 2022 as Spotify Camp Nou",
        body3: "The construction of Camp Nou started on 28 March 1954 as Barcelona's previous stadium, Camp de Les Corts, had no room for expansion. Although originally planned to be called the Estadi del FC Barcelona, the more popular name Camp Nou was used. The June 1950 signing of László Kubala, regarded as one of Barcelona's greatest players, provided further impetus to the construction of a larger stadium. On 14 November 1950, the president Agustí Montal i Galobart obtained the favourable agreement of an assembly of members to acquire land for the construction of a new stadium, located in Hospitalet de Llobregat, which was later exchanged with the Barcelona City Council for other land in the neighbourhood of Les Corts. The stadium is located at the end of Travessera de les Corts, next to the Cementiri and the Maternitat. The commission dedicated to the project recommended another location in February 1951. The official purchase took place two years later.",
        date: "10 MAR 2023"

    },
    { //15
        title: "MOUNUMENTAL DE CHILE",
        imgdescription: "MOUNUMENTAL DE CHILE STADIUM",
        img: "../images/leagues/stadium4.jpg",
        body: "The Estadio Monumental is a football Stadium in Macul, south-east of the centre of the Chilean capital Santiago. It serves as the home ground of Colo-Colo, and on occasions also for other clubs and the national football team. The stadium has a current spectator capacity of 47,347. The actual playing field is named after David Arellano, the founder of Colo-Colo; therefore, on occasions the whole stadium is referred to as Estadio Monumental David Arellano.",
        body2: "The stadium was first opened in 1975 with a double-header in front of 25,599 people. In the first match Santiago Morning and Santiago Wanderers drew 1-1 and in the main event Colo-Colo defeated Deportes Aviación 1-0, Carlos Orellana being the scorer. However, the stadium proved unsuitable for ongoing use, and therefore only five more matches took place there for the time being.Completed in its current form in 1989, it was reopened in September of that year with a match between Colo-Colo and CA Peñarol from Uruguay, which the hosts won 2-1, thanks to goals by Marcelo Barticciotto and Leonel Herrera. The official capacity of the stadium then was between 62,500 and 65,000 spectators. The highest ever recorded attendance when 69,305 spectators saw a league match between Colo-Colo and Club Universidad de Chile in 1992. The stadium was in 1991 home to the second Copa Libertadores final, won by Colo-Colo 3-0, making it the sole Chilean club to win the trophy.",
        body3: "The stadium is also rented out to club Santiago Morning and other Chilean teams that require holding games on the international tournament scale.As well as hosting club teams, Estadio Monumental has held seven games of the Chile national football team when the Estadio Nacional, the main football stadium of the country, is unavailable. In 1997, Ivan Zamorano scored five goals for Chile in a 6-0 win over Venezuela during a France 1998 World Cup qualifier. In 2009, Chile drew 2-2 in another qualifier against Venezuela for the South Africa 2010 World Cup, and won 1-0 against Ecuador for a qualifier in the same competition. In 2012, Chile played two qualifiers for the Brazil 2014 World Cup at the Estadio Monumental, winning 4-2 against Peru, and losing 1-3 against Colombia. Two international friendly matches have been held the stadium: a 2-0 win for Chile over Uruguay in 2010, and a 4-0 Chilean victory over Estonia in 2011",
        date: "10 MAR 2023"

    },
    { //16
        title: "SAN MAMES",
        imgdescription: "SAN MAMES STADIUM",
        img: "../images/leagues/stadium5.jpg",
        body: "San Mamés (also known as Nuevo San Mamés or San Mames Barria) is an all-seater football stadium in Rafael Moreno Pitxitxi Kalea, Bilbao, Basque Country, Spain. Inaugurated on 16 September 2013, the stadium replaced the 'old' San Mamés as the home of Athletic Bilbao. With a capacity of 53,331 seats, San Mamés is the 7th-largest stadium in Spain and the largest in the Basque Country.",
        body2: "The first stages of planning occurred as early as 2004,[5] with initial contracts signed late on in 2006, after receiving approval to build in March 2006. The new stadium was to be built next to the existing San Mamés on land that was occupied until 2003 by the Bilbao International Trade Fair.On 26 May 2010 at 12:00 the ground-breaking ceremony took place at San Mamés.[6] The event was attended by: the Lehendakari of the Basque Country, Patxi López; the Deputy-General of Biscay, José Luis Bilbao; the Mayor of Bilbao, Iñaki Azkuna; the Chairman of Bilbao Bizkaia Kutxa, Mario Fernández; the President of the Royal Spanish Football Federation, Ángel María Villar and the President of Athletic Club, Fernando García Macua.",
        body3: "n a symbolic display, a piece of turf and a brick from the facade were removed from the old stadium and carried to the adjacent construction site by a human chain including famous players Iribar, Larrazábal, Iturraspe and Muniain as well as members of the youth system, the women's team, the reserve team and its oldest and youngest registered supporters.Initially, three-quarters of the new stadium were built and then matches took place in it, while the old one was demolished to make room to complete the new arena.Construction in progress, June 2013Despite the economical woes the country was going through at the time, especially the Basque people, 52.6% of the total €211 million (£178 million) cost of the stadium was paid by public institution - some by the Basque Government (€50m), some by the Bilbao City Council (€11m) and some by the Biscay Provincial Council (€50m including land), as well as Athletic (€50m including land) and BBK/Kutxabank (€50m), on the proviso that the stadium would include facilities for use by the public such as a sports centre.[8] It had been believed that the European Commission were investigating this use of public funds for any possible impropriety in the deal, but in late 2013 it was confirmed by Joaquín Almunia, the commissioner for competition at the time (and an Athletic supporter from Bilbao), that no such case was being pursued.",
        date: "10 MAR 2023"

    },
    { //17
        title: "WANDA METROPOLITANO",
        imgdescription: "WANDA METROPOLITANO STADIUM",
        img: "../images/leagues/stadium6.jpg",
        body: "Metropolitano Stadium (Spanish: Estadio Metropolitano), also referred to as Cívitas Metropolitano for sponsorship reasons, is a stadium in Madrid, Spain. It has been the home stadium of Atlético Madrid since the 2017–18 season. It is located in the Rosas neighbourhood, in the San Blas-Canillejas district.The stadium was built as part of Madrid's unsuccessful bid to host the 1997 World Athletics Championships, and was opened on 6 September 1994 by the Community of Madrid. It was closed in 2004 due to the city's unsuccessful bid for the 2016 Olympics and in 2013 it passed into the possession of Atlético Madrid. The stadium was renovated and the new facility was reopened to the public on 16 September 2017, when Atlético Madrid faced Málaga in La Liga. The stadium had a capacity of 20,000 spectators upon its closure and re-opened with a seating capacity of 68,456 after renovation.",
        body2: "the stadium was formerly known as Estadio de la Comunidad de Madrid (Madrid Community Stadium), Estadio Olímpico de Madrid (Madrid Olympic Stadium), and more commonly by its nickname Estadio de La Peineta (The Comb Stadium). Naming rights were acquired by the Wanda Group, a Chinese real estate company. Due to UEFA sponsorship regulations the stadium is known as Estadio Metropolitano in UEFA marketing materials",
        body3: "During the early 1990s the Sports Council of the Community of Madrid promoted the city's bid to host the World Athletics Championships in 1997. The preparations began for a stadium in eastern Madrid, next to the M-40 motorway and close to the Madrid–Barajas Airport.Construction of the new stadium began in 1990 and was based on a design proposed by Cruz y Ortiz. It was completed in November 1993 at a cost of €45 million, and the inauguration took place in September 1994 in front of then IOC president Juan Antonio Samaranch, then Community of Madrid president Joaquín Leguina, and then mayor of Madrid José María Álvarez del Manzano.[9] The single seating tier stadium with a capacity of 20,000 seats became known as La Peineta (the comb) because of its similarity with a traditional hair comb.The 1997 World Championships in Athletics were eventually awarded to Athens in 1995, and La Peineta was used for minor sports and cultural events during the first decade of its existence.",
        date: "10 MAR 2023"

    }
]




function loadContent(type){

    var full_view_content = document.getElementById("full_view_content");
    
    for(var i=0; i<articleData.length; i++){
        
   if(type == i){

    full_view_content.innerHTML = '<div class="popup">' + '<h1 class="text-white">' + articleData[i].title + '</h1>' +'<img src="' + articleData[i].img + ' "> ' + '<p class="container text-center">' + articleData[i].imgdescription + '<small class="text-danger px-5 ms-4">' + articleData[i].date  + '</small>' + '</p>' + '<p class="container">' + articleData[i].body + '</p>' + '<p class="container">' + articleData[i].body2+ '</p>' + '<p class="container">' + articleData[i].body3+ '</p>' +'</div>' + '<p class="text-center text-warning">' + 'The End' + '</p>';

    }  
    }

   var div = document.getElementById('full_view_div_container');
   div.classList.add('visible');

}

function closeContent(){
   const div = document.getElementById('full_view_div_container');
   div.classList.remove('visible');
}













