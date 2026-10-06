export function getFreshnessClass(adc) {
  if (adc <= 90) return 'Very Fresh'
  if (adc <= 150) return 'Fresh'
  return 'Spoiled'
}

export function getFinalQualityClass(adc) {
  if (adc <= 80) return 'High Quality'
  if (adc <= 115) return 'Medium Quality'
  return 'Low Quality / Reject'
}

export function calculateBoilingTime({ batchMass, thickness, freshness }) {
  const d0 = 4.5
  const M0 = 15
  const alpha = 40
  const base = alpha * (thickness / d0) ** 1.4 * (batchMass / M0) ** 0.3

  const deltaMap = {
    'Very Fresh': 0,
    Fresh: 3.5,
    Spoiled: 6,
  }

  const delta = deltaMap[freshness] ?? 0
  return Number((base + delta).toFixed(1))
}

export function calculateSaltConcentration(freshness) {
  if (freshness === 'Very Fresh') return 13.5
  if (freshness === 'Fresh') return 14.1
  return 14.8
}

export function calculateProcessStatus({ boilingTime, batchMass, thickness }) {
  if (boilingTime < 45 && batchMass <= 18 && thickness < 5) return 'Stable'
  if (boilingTime < 55) return 'Monitoring'
  return 'Needs Attention'
}

export function calculateShelfLife({ temperature, waterActivity, degIndex }) {
  const baseline = 180
  const tempAdjustment = Math.exp(-0.06 * (temperature - 25))
  const waterAdjustment = 1 - (Math.max(0.55, waterActivity) - 0.55) * 0.9
  const degAdjustment = 1 - (degIndex / 100) * 0.5
  const estimate = baseline * tempAdjustment * waterAdjustment * degAdjustment
  return Math.max(30, Math.min(180, Number(estimate.toFixed(1))))
}

export function getQualityTone(value) {
  if (value <= 80) return 'Stable'
  if (value <= 115) return 'Monitor'
  return 'Critical'
}
