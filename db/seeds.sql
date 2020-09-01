USE interplanetary_travel;

INSERT INTO `Users`
(`email`, `password`, `createdAt`, `updatedAt`)
VALUES
("example@email.com", "$2a$10$8c3rCMo6bJagpE8lmyTmtewaCnIK/VsEaPGk0mrSIpX1lE5haT2U2", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO `Amenities`
(`name`, `cost`, `description`, `createdAt`, `updatedAt`)
VALUES
('All You Can Eat Shrimp', 26, 'Enjoy all you can eat shrimp! Price is calculated per 24-hour cycle. Must choose ammount prior to departure date.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Private Bedroom', 35000, 'Enjoy privacy in a custom-built compartment providing the maximum level of comfort for a single individual.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Pilot in Command Flight Experience', 140000, 'Sit as the "Pilot in Command" of your spacecraft for an entire shift! A certified flight instructor will sit next to you every step of the way, but you will be in command of your journey! Requires pre-flight training session.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Influencer Package', 80000, 'A professional photographer/videographer will join your mission and document the entire story visually, making you the star of an adventure that you will be sharing for the rest of your life!', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Upgraded Personal Items', 7500, 'This package provides an additional compartment of storage space for your personal belongings for the entirity of the trip.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Mrs. Meyers Hand Soap (while in Gravity)', 100, 'Your favorite soap but in space', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('VHS Casette Player (1999)', 2000, 'Never get bored', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Sesame Street', 500, 'VHS casette', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Personal supply of "Moon"Shine', 5000, 'never be thirsty.....or sober', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO `Countries`
(`name`, `createdAt`, `updatedAt`)
VALUES
('United States',  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO `Companies`
(`name`, `createdAt`, `updatedAt`, `CountryId`)
VALUES
 ('Blue Origin', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
 ('SpaceX', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
 ('United Launch Alliance', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO `launchSites`
(`name`, `operatedBy`, `createdAt`, `updatedAt`) 
VALUES
('Cape Canaveral, Florida', 'NASA', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Cape Canaveral Air Force Station', 'USAF', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Vandenburg Air Force Base', 'USAF', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO `Planets`
(`name`, `distance`, `description`, `image`, `createdAt`, `updatedAt`)
VALUES
('Sun', 93000000000, "Want a tan for your amazing beach body? You can get crispy and fired up with temperatures reaching 15 million degrees Celsius! Be sure to cool off by visiting the Sun's surface where the temperature is a mere 5,600 degrees Celsius. The Sun is an almost perfect sphere of Hydrogen and Helium, with nuclear fusion happening at its core. Don't be fooled this is one of our Hottest destinations with daily one-way trips on your schedule.", "/assets/images/planets/sun.svg", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Mercury', 57000000000, "Mercury is the smallest and innermost planet in the Solar System. It only takes 87.97 days to orbit the Sun. This small planet might not be around for long as it is in a state of constant shrinking. Though Mercury is small in stature it has some of the greatest biggest craters, including a crater big enough to fit the entirety of Western Europe inside. This planet has some of the hottest temps with day surface temperature reaching 800 degrees Fahrenheit and night temperatures dropping down to -269 degrees Fahrenheit. One Mercury day last 59 Earth days so you can enjoy endless daytime activities.", "/assets/images/planets/mercury.png", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Venus', 25800000000, "Named after the Roman goddess of love and beauty. At 23.8 Million miles from Earth, Venus boast an atmosphere consisting of mostly carbon dioxide, with clouds of sulfuric acid droplets. For all the people who complain about being 'cold' on Earth, Venus's thick atmosphere traps the Sun's heat resulting in a slightly 880 degrees Fahrenheit. Be sure to bring lots of water or upgrade your amenities. You'll need every freakin' drop of that great H20!", "/assets/images/planets/venus.png", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Earth', 0, "This will be our launch point and also our return point.  Oxygen, H2O and Mineral rich planet with a perfect distance from the sun. You'll be glad to come back to this solar oasis after your long interplanetary journey.",  "/assets/images/planets/earth.png", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Moon', 238900, "The Moon is Earth’s only permanent natural satellite. The Moon is in synchronous rotation with Earth and always show Earth the same face. Though it appears bright in the night sky, the Moon’s surface is actually dark. It’s gravitational influence produces the ocean tides, body tides, and the slight lengthening of the Earth day. Like some of the planets in our Solar System, water is trapped in the form of ice. Much of this water is trapped within dust and minerals on and under the surface.",  "/assets/images/planets/moon.png", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Mars', 48600000000, "A carbon dioxide rich, red planet that is 48.6 million miles from earth. This planet is on target to become one of the first planets that will be colonized by Space X founder Elon Musk. Travel to this planet in a Starship capsule powered by liquid methane engines. With guaranteed aerial refueling stations you'll be sure to make this a family vacation spot for years to come. Oh, pack a light jacket as Mars averages -81 degrees Fahrenheit and with wintertime lows at -220 degrees Fahrenheit 'burrrrrrrr'.", "/assets/images/planets/mars.png", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Jupiter', 390600000, "This Massive planet in our solar system is 318 times more massive than the earth. In fact Jupiter is 2.5 times more massive than all the of the planets in our Solar System combined. Flying to Jupiter isn't cheap with only seven visits by spacecraft. If your feeling like you need a little jumpstart to your day you'll quickly be whipped into shape as Jupiter  rotates at around 28,148 mph. Equally a quick night & day cycle will happen in only 10 hours so be ready to carpe diem. Be sure to pack an extra lead jacket for you and your guests as you will experience a magnetic field 14 times stronger than Earth's and radiation levels that will blow your socks off.", "/assets/images/planets/jupiter.png", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Saturn', 777000000, "Saturn is the most distant planet that can be seen with the naked eye. It is one of the flattest planets so you and your love ones will enjoy endless long walks and birthdays that come only every 29.4 years. For being so far out in our Solar System Saturn has gained numerous admirers, namely it's 150 moons and moonlets. Be sure to bring eyewear as Saturn boast being the fifth brightest object the Solar System. With highly visible rings made of dust, ice and rock our pilots have never gotten lost voyaging to this far out planet.", "/assets/images/planets/saturn.png", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Uranus', 1690000000, "Discovered in 1781 by astronomer William Herschel, Uranus was the first planet to be found using a telescope. If you need to 'cool off' from your earthly worries, Uranus is an Ice Giant nearly four times larger than Earth.  You'll need to bring your equilibrium medication since Uranus rotates east to west on its side. Don't be worried that this planet doesn't support life, you may just want to bury any likeness of your distant past.", "/assets/images/planets/uranus.png", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Neptune', 2700000000, "This gas giant is eighth planet from the Sun, making it the most distant planet in our Solar System. While not being very visible with the naked eye it was first observed in 1846 and has only been visited by a fly-by spacecraft once. This hydrogen , helium and methane gas laden planet will have you absorbing red light which in turn makes everything blue. Be sure to keep your seatbelts buckled during entry as Neptune is known for storm winds speeds of up to 1,500 mph.  Wanna be 'Forever Young'? Well, on Neptune you'll always be with a complete orbit of the sun every 165 years.", "/assets/images/planets/neptune.png", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Pluto', 4670000000, "Pluto is largest dwarf planet and contains 3 times as much water as in the Earth’s oceans in the form of water ice. This icicle world has so much beauty including mountain ranges, light and dark regions, and a scattering of craters. When Pluto’s elliptical orbit takes it closer to the Sun, its surface ice thaws and forms a thin atmosphere primarily of nitrogen. It also releases methane gas. This gassy haze mixes with the Sun’s light and hydrocarbons fall to the surface and coat the ice with a dark covering. As Pluto travels away from the Sun the atmosphere freezes back to its solid state. It takes 248 years to orbit the Sun.", "/assets/images/planets/pluto.png", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO `Rockets`
(`name`, `passengers`, `range`, `cruisingSpeed`, `launchCost`, `createdAt`, `updatedAt`, `CompanyId`)
VALUES
('Atlas V', 2, 50000000000, 45000, 100000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
('Delta IV', 4, 100000000000, 47000, 150000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
('Delta V', 4, 500000000000, 50000, 200000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
('Delta V Heavy', 5, 777000000000, 55000, 450000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
('Falcon IX', 4, 900000000000, 60000, 250000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
('Falcon IX Heavy', 5, 1690000000000, 65000, 450000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
('Falcon X', 8, 1000000000000, 60000, 500000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
('Falcon X Heavy', 8, 2700000000000, 65000, 750000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
('Falcon XX', 10, 2000000000000, 75000, 1250000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
('New Glenn 2 Stage', 3, 40000000000, 26000, 350000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
('New Glenn 3 Stage', 5, 150000000, 30000, 550000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1);

INSERT INTO `Flights`
(`arrivalTimeEst`, `totalCost`, `flightNumber`, `timestamp`, `createdAt`, `updatedAt`, `AmenityId`, `PlanetId`, `UserId`, `RocketId`)
VALUES
(CURRENT_TIMESTAMP, 1600000000000, 'SAT543', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3 ,8, 1, 9),
(CURRENT_TIMESTAMP, 1340000000000, 'VEN191', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 3, 1, 2),
(CURRENT_TIMESTAMP, 80000000, 'MAR943', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 6, 1, 11);

-- INSERT INTO `flightamenities`
-- (`createdAt`, `updatedAt`, `AmenityId`, `FlightId`)
-- VALUES
-- (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1),
-- (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 1),
-- (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4, 1),
-- (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5, 1);

-- INSERT INTO `flightinprogresses`
-- (`arrivalTimeEst`, `totalCost`, `flightNumber`, `timestamp`, `createdAt`, `updatedAt`, `PlanetId`, `UserId`, `RocketId`)
-- VALUES
-- (CURRENT_TIMESTAMP, 1600000000000, 'ECA543', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7, 1, 10);

-- INSERT INTO `flightinprogressamenities`
-- (`createdAt`, `updatedAt`, `AmenityId`, `FlightInProgressId`)
-- VALUES
-- (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1, 1),
-- (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2, 1),
-- (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5, 1);