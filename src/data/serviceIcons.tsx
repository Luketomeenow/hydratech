import type { Icon } from '@phosphor-icons/react'
import {
  ShieldCheck,
  Gear,
  Wrench,
  Pipe,
  Gauge,
  Drop,
  Flask,
  SprayBottle,
  Crane,
} from '@phosphor-icons/react'

export const serviceIcons: Record<string, Icon> = {
  'hard-chrome-plating': ShieldCheck,
  'precision-machining': Gear,
  'hydraulic-repairing-troubleshooting': Wrench,
  'tubing-installation': Pipe,
  'pressure-testing': Gauge,
  'oil-flushing': Drop,
  'chemical-cleaning': Flask,
  'high-pressure-water-jet-cleaning': SprayBottle,
  'structural-steel-fabrication': Crane,
}
