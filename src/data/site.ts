export const company = {
  name: 'HydraTech ME',
  legalName: 'HYDRATECH ME FZCO',
  tagline: 'Advanced hydraulic solutions & services',
  founded: 2010,
  parent: 'HABU Holding, Norway',
  certifications: ['ISO 9001', 'ISO 14000', 'OHSAS 18000'],
  address: 'PO Box 18214, Jebel Ali Free Zone, Dubai, UAE',
  phone: '+971 4 802 7000',
  fax: '+971 4 802 7001',
  email: 'info@hydratech-me.com',
}

export const industries = [
  'Petrochemical',
  'Oil & Gas EPC Contractors',
  'Drilling Companies',
  'Construction',
  'Marine',
  'Heavy Industry',
  'Power',
]

export const about = {
  intro: [
    'HYDRATECH ME FZCO is a subsidiary of HABU Holding, Norway, an ISO 9001, 14000 and OHSAS 18000 certified company based in Jebel Ali Free Zone, UAE. We are a specialized hydraulic engineering company providing services to various market segments, with a business concept built around services, product sales and rental of niche products to the oil industry, both domestically and globally.',
    'HYDRATECH ME FZCO was formed in 2010 under the principle of providing quality services and products at a fair price, maximizing value for our clients. We are one of the few companies in the region to specialize in hard chrome plating, hydraulic tubing installation, oil flushing, chemical cleaning and hydraulic repair services, alongside a rental fleet of hydro-testing equipment, flushing rigs, particle counters, filter skids and oil and gas sampling cylinders.',
    'Our innovative, proven technologies are unparalleled. We undertake entire subcontracts for these services across industries and plants, and the scope of our client base grows every day.',
  ],
  commitments: [
    'Effective leadership',
    'Empowering people to achieve the desired results',
    'Complying with customer, legal and regulatory requirements',
    'Enhancing mutual supplier and customer relationships',
  ],
  vision:
    'HYDRATECH will advance engineering by being the most trusted choice of products and the best service provider in hydraulic applications.',
  values:
    'HYDRATECH is reliable and trustworthy. We understand the responsibility of working safely, provide advanced solutions with the latest technology, and never compromise on quality. Our teamwork is what makes us unique, and our intention is always positive towards the future.',
}

export interface Service {
  slug: string
  title: string
  short: string
  description: string[]
  bullets?: { heading: string; items: string[] }
  image: string
}

export const services: Service[] = [
  {
    slug: 'hard-chrome-plating',
    title: 'Hard Chrome Plating',
    short:
      'OD, ID and partial hard chroming of shafts, rollers and cylinders up to 6 m length and 1 m diameter.',
    description: [
      'HYDRATECH ME FZCO has an advanced facility for OD and ID hard chroming and partial hard chroming on shafts, rollers and cylinders up to 6 m in length and 1 m in diameter. We specialize in reconditioning and rebuilding high-precision machine components to particular specifications.',
      'Hard chrome plating is provided to different quality requirements depending on the application. It can be applied to all types of stainless steel alloys, most ferrous metals, and some nonferrous metals including copper and brass. Contact our application engineers to discuss the feasibility of applying hard chrome to other metals such as aluminium.',
    ],
    bullets: {
      heading: 'Steps involved in hard chrome plating',
      items: [
        'De-chroming and pre-grinding to remove dents and scratches',
        'Chroming: hard chrome plating by electrolytic process',
        'Cylindrical grinding for required surface finish and size',
        'Surface finish options according to requirement',
        'Hardness: 68 to 73 Rockwell',
        'Accuracy: 2 micron',
      ],
    },
    image: '/images/service-hard-chrome-plating.jpg',
  },
  {
    slug: 'precision-machining',
    title: 'Precision Machining',
    short:
      'Turning, deep hole drilling, gear cutting, honing, grinding and spline milling on Churchill machines.',
    description: [
      'Precision machining is a process where material is removed by a cutting surface, such as grinding, honing, turning or milling, controlled so that all variation from vibration, bearings or measurement error is statistically insignificant except for tool wear.',
      'We provide precision machining services to various industries, with top Churchill-make machines and experienced operators.',
    ],
    bullets: {
      heading: 'Machining services we provide',
      items: [
        'Turning',
        'Deep hole drilling',
        'Gear cutting',
        'Honing',
        'Grinding',
        'Spline milling',
      ],
    },
    image: '/images/service-precision-machining.jpg',
  },
  {
    slug: 'hydraulic-repairing-troubleshooting',
    title: 'Hydraulic Repair & Troubleshooting',
    short:
      'On-site and workshop repair of cylinders, winches, cranes, BOP systems, power packs and more.',
    description: [
      'HYDRATECH ME FZCO specializes in repairing and troubleshooting hydraulic equipment. Our technicians and engineers are well trained with a wide range of experience in hydraulic repair.',
      'We carry out both on-site and off-site repairs depending on the condition of the equipment and your requirements.',
    ],
    bullets: {
      heading: 'Equipment we repair and troubleshoot',
      items: [
        'Hydraulic cylinders',
        'Winches',
        'Cranes',
        'BOP systems',
        'Hydraulic power packs',
        'Hydraulic steering systems',
        'Pumps',
        'Gearboxes',
        'Control valves',
        'Mining equipment',
        'Presses',
      ],
    },
    image: '/images/service-hydraulic-repairing-troubleshooting.jpg',
  },
  {
    slug: 'tubing-installation',
    title: 'Hydraulic Tubing Installation',
    short:
      'Low and high pressure tubing installation with Parker, Sandvik and Swagelok systems, SS and carbon steel.',
    description: [
      'HYDRATECH ME FZCO specializes in the installation of both low pressure and high pressure tubing for hydraulic applications. Parker, Sandvik and Swagelok are the major products we provide depending on the requirement. We install both stainless steel and carbon steel tubing, and supply hydraulic industrial hoses and ABS-approved fittings.',
      'HYDRATECH offers advanced hydraulic solutions and one-source supply of system design, engineering consultancy, components, installation, refurbishment and upgrades of fluid power equipment.',
    ],
    bullets: {
      heading: 'Systems we install tubing for',
      items: [
        'Winches',
        'Steering systems',
        'Drill floor systems',
        'Cranes and jacks',
        'Hydraulic power packs',
        'Other hydraulic systems',
      ],
    },
    image: '/images/service-tubing-installation.jpg',
  },
  {
    slug: 'pressure-testing',
    title: 'Pressure Testing',
    short:
      'Hydro, nitrogen and CO2 testing of pipelines, vessels, hoses and cylinders from a few PSI to 30,000 PSI.',
    description: [
      'HYDRATECH provides hydro testing for installed pipelines, tube lines, air bottles, cylinders, hydraulic hoses and reservoirs to ensure the integrity of the system prior to any commissioning activity. We also provide high pressure testing for sampling cylinders, accumulators and other hydraulic equipment, along with nitrogen and CO2 pressure testing, across an extensive range from a few PSI to 30,000 PSI.',
      'Hydro testing of pipes, pipelines and vessels exposes defective materials that have missed prior detection, ensures remaining defects are insignificant enough to allow operation at design pressures, exposes possible leaks and serves as final validation of the integrity of the constructed system. High pressure oil and gas pipelines are tested for strength by pressurizing them to at least 125% of their maximum allowable operating pressure (MAOP), as required by ASME B31.3.',
      'Our personnel provide pressure testing services at client sites and undertake entire subcontracts covering pressure testing, chemical cleaning and oil flushing.',
    ],
    image: '/images/service-pressure-testing.jpg',
  },
  {
    slug: 'oil-flushing',
    title: 'Oil Flushing',
    short:
      'High-velocity flushing of hydraulic and lube systems to ISO 4406 / NAS 1638 cleanliness classes.',
    description: [
      'Oil flushing services extend the life cycle of hydraulic and lubrication systems during commissioning, periodic maintenance and repair. Flushing ensures that new rotating and hydraulic equipment starts up and operates at full efficiency and prevents premature failure.',
      'New constructions are susceptible to severe contamination such as rust, scale, slag, sand and dirt, all leading to failure of even the best-designed systems. Particles as small as five microns can cause significant damage if allowed to remain in the process system, creating a chain reaction of further contamination.',
      'HYDRATECH assesses system cleanliness using oil samples and customer inputs on system performance, maintenance and operating conditions, then flushes the system to a predetermined cleanliness class (ISO 4406 / NAS 1638). A clean system keeps equipment running longer and better for years to come.',
    ],
    bullets: {
      heading: 'Applications for flushing',
      items: [
        'Hydraulic control systems',
        'Marine vessel hydraulic, lube and fuel oil systems',
        'Steam and gas turbine lube systems',
        'Steering, winch and crane hydraulic systems',
        'Subsea control lines',
        'Compressor lube oil system cleaning',
      ],
    },
    image: '/images/service-oil-flushing.jpg',
  },
  {
    slug: 'chemical-cleaning',
    title: 'Chemical Cleaning',
    short:
      'Pickling and passivation of piping, boilers, exchangers and tanks for pre- and post-commissioning.',
    description: [
      'Chemical cleaning is required during pre-commissioning or post-commissioning activities and is generally applicable during regular shutdown work. It has long been regarded as the most efficient and least disruptive method for cleaning piping and cooling water systems, boilers and tanks.',
      'On new-build systems, chemical cleaning ensures residual contamination and excess deposits such as scale, welding scale, corrosion, sand, temporary protective coatings, construction debris, oil and grease do not contaminate fluid in the piping or damage rotating machinery and valves. In-service piping affected by contaminants and organic or inorganic scale may in time suffer reduced flow rates or heat transfer.',
      'HYDRATECH provides technically advanced, cost-effective chemical cleaning with a varied-capacity fleet of cleaning equipment and a portable laboratory. The procedure covers degreasing, pickling, passivation, neutralization and drying.',
    ],
    bullets: {
      heading: 'Surface treatments and cleaning',
      items: [
        'Chemical cleaning of SS, MS and CS pipes on marine vessels',
        'Pickling and passivation of steel structures and spools',
        'Chemical treatment of heat exchangers',
        'Cleaning of vessels (steam cleaning, HP water jet cleaning)',
        'Anti-corrosion treatments',
      ],
    },
    image: '/images/service-chemical-cleaning.jpg',
  },
  {
    slug: 'high-pressure-water-jet-cleaning',
    title: 'High Pressure Water Jet Cleaning',
    short:
      'Water jetting up to 20,000 PSI for tanks, vessels, exchangers, piping and surface preparation.',
    description: [
      'High pressure washing removes loose paint, mold, grime, dust, mud and dirt from equipment surfaces, vehicles and concrete. Different nozzle types suit different applications: fan-pattern jets, rapidly spiralling cone-pattern jets, and higher-flow nozzles for lower output pressure. Our equipment washes at up to 20,000 PSI with a full range of nozzle types.',
      'We provide high pressure washing services throughout industry: heavy industry and paper mills (tanks, vessels, components, process piping, liquor heaters and evaporators), power generation (boiler cleaning, ash removal) and petrochemical plants (heat exchangers, tanks, vessels, process piping, marine vessel maintenance, surface preparation and coating removal).',
    ],
    bullets: {
      heading: 'Common applications',
      items: [
        'Heat exchangers and tube bundles',
        'Tanks, vessels and components',
        'Process piping',
        'Boiler cleaning and ash removal',
        'Surface preparation and coating removal',
        'Marine vessel maintenance',
      ],
    },
    image: '/images/service-high-pressure-water-jet-cleaning.jpg',
  },
]

export interface Product {
  slug: string
  title: string
  description: string[]
  /** Short factual spec callouts, sourced from the original site copy */
  highlights?: string[]
  items?: string[]
  image: string
}

export const products: Product[] = [
  {
    slug: 'hydraulic-power-packs',
    title: 'Hydraulic Power Packs',
    description: [
      'We are a leading manufacturer of hydraulic power packs for various applications, built to requirement with high quality components. Pressure and flow ratings are selected per client requirement, and we offer both standard and customized power packs.',
    ],
    highlights: ['Standard & customized builds', 'Client-specified pressure & flow'],
    image: '/images/product-hydraulic-power-packs.jpg',
  },
  {
    slug: 'high-pressure-testing-equipment',
    title: 'High Pressure Testing Equipment',
    description: [
      'We manufacture pneumatic-driven pump pressure testing units for our rental fleet, with both high-pressure low-flow and low-pressure high-flow pumps available, including dual-pump units combining high flow and high pressure. Units go up to 30,000 PSI, with inbuilt pressure chart recorders and gauges.',
    ],
    highlights: ['Up to 30,000 PSI', 'Inbuilt chart recorders & gauges'],
    image: '/images/product-high-pressure-testing-equipment.jpg',
  },
  {
    slug: 'hydraulic-cylinders',
    title: 'Hydraulic Cylinders',
    description: [
      'We manufacture piston shafts, cylinder bodies, pistons, gland nuts and seal kits, with assembly and pressure testing of complete cylinders. Both double-acting and single-acting hydraulic cylinders are supplied with the required capacity and stroke length per customer requirement.',
    ],
    highlights: ['Single & double acting', 'Custom capacity & stroke'],
    image: '/images/product-hydraulic-cylinders.jpg',
  },
  {
    slug: 'flushing-equipment',
    title: 'Flushing Equipment',
    description: [
      'We are one of the eminent manufacturers and suppliers of a wide range of oil, water and chemical flushing equipment. Manufactured from high quality material procured from certified vendors, this range is at par with global standards in design, quality and performance.',
    ],
    highlights: ['Oil, water & chemical flushing'],
    items: [
      'Hot oil flushing equipment',
      'Oil flushing systems',
      'Oil filtration equipment',
      'Water flushing equipment',
      'Chemical flushing equipment',
    ],
    image: '/images/product-flushing-equipment.jpg',
  },
  {
    slug: 'bottom-hole-sampling-cylinders',
    title: 'Bottom Hole Sampling Cylinders',
    description: [
      'Bottom hole sampling captures reservoir fluid samples at reservoir conditions. To obtain accurate compositional and PVT analyses, recovered samples must remain at bottom hole conditions; special chambers compensate for the pressure drop as samples return to the surface.',
      'Our sister company Habu Sampling, Norway manufactures both oil and gas bottom hole sampling cylinders, which we supply across the Gulf region. Gas cylinders hold 20 litres at 3,000 PSI; oil cylinders hold 1,000 cc at 10,000 PSI.',
    ],
    highlights: ['Gas: 20 L at 3,000 PSI', 'Oil: 1,000 cc at 10,000 PSI'],
    image: '/images/product-bottom-hole-sampling-cylinders.jpg',
  },
  {
    slug: 'supply-trading',
    title: 'Supply & Trading',
    description: [
      'HYDRATECH ME FZCO is the largest stockholder in the region of hydraulic raw materials and components, chemically cleaned and oil flushed ready for service.',
    ],
    highlights: ['Largest stockholder in the region'],
    items: [
      'Hard chrome plated bar',
      'Honed tubes',
      'Pumps',
      'Filters and valves',
      'Seal and O-ring kits',
      'Pipes and tubes, chemically cleaned and oil flushed',
    ],
    image: '/images/product-supply-trading.jpg',
  },
]

export interface RentalItem {
  slug: string
  title: string
  description: string[]
  items?: string[]
  image: string
}

export const rentalFleet: RentalItem[] = [
  {
    slug: 'flushing-equipment-particle-counters',
    title: 'Flushing Equipment & Particle Counters',
    description: [
      'Rental fleet of flushing equipment and particle counters that measure the purity / NAS class of oil. All our flushing rigs are fabricated with high quality motors, engines and pumps.',
    ],
    items: [
      'Oil flushing equipment',
      'Water flushing equipment',
      'Laser particle counters for online analysis',
    ],
    image: '/images/rental-flushing-equipment-particle-counter.png',
  },
  {
    slug: 'high-pressure-testing-chart-recorders',
    title: 'High Pressure Testing Equipment & Chart Recorders',
    description: [
      'Both high pressure and low pressure testing pumps on a rental basis, with pressure testing skids up to 35,000 PSI. Pressure gauges and chart recorders are mostly inbuilt with the skids.',
    ],
    image: '/images/rental-high-pressure-testing-chart-recorders.png',
  },
  {
    slug: 'filter-skids',
    title: 'Filter Skids',
    description: [
      'Filter skids for water, chemical and fuel filtration. All filter housings are fabricated in stainless steel and connected with carbon steel pipes. Each filter bag housing handles up to 20 m3/hour, with 4-bag, 8-bag and 12-bag skids plus multi-bag skids with 8 bags in a common housing.',
    ],
    image: '/images/rental-filter-skids.png',
  },
  {
    slug: 'oil-filtration-pumps',
    title: 'Oil Filtration Pumps',
    description: [
      'Oil filtration is the industry norm for removing contamination from oil to achieve maximum cleanliness class. HYDRATECH offline filtration units can filter hydraulic and lube systems down to 2 micron level.',
    ],
    image: '/images/rental-oil-filtration-pumps.png',
  },
  {
    slug: 'gas-boosters',
    title: 'Gas Boosters',
    description: [
      'Gas booster pumps designed for a wide range of applications: oxygen and nitrogen boosting, gas filling, pressurization and oil-free gas compression.',
    ],
    image: '/images/rental-gas-boosters.png',
  },
  {
    slug: 'oil-gas-sampling-cylinders',
    title: 'Oil & Gas Sampling Cylinders',
    description: [
      'Bottom hole sampling cylinders on a rental basis for both oil and gas sampling, designed to store samples and transport them to the laboratory for testing. Gas cylinders hold 20 litres at 3,000 PSI; oil cylinders hold 1,000 cc at 10,000 PSI.',
    ],
    image: '/images/rental-oil-gas-sampling-cylinders.png',
  },
]
