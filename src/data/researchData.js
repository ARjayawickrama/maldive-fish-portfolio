export const heroMetrics = [
  { label: 'Raw Fish mAP@0.5', value: 95.8, suffix: '%', format: 'percent' },
  { label: 'Final Product Accuracy', value: 94.0, suffix: '%', format: 'percent' },
  { label: 'Boiling Time Reduction', value: 27.9, suffix: '%', format: 'percent' },
  { label: 'MQTT Delivery Rate', value: 99.6, suffix: '%', format: 'percent' },
  { label: 'Optimized Drying', value: 4.2, suffix: ' Days', format: 'days' },
  { label: 'Thermal Energy Reduction', value: 23.0, suffix: '%', format: 'percent' },
]

export const problemCards = [
  'Subjective Freshness Assessment',
  'Uncontrolled Boiling',
  'Unmonitored Drying',
  'Inconsistent Final Product Quality',
]

export const processComparison = [
  { traditional: 'Manual inspection', proposed: 'AI vision + gas sensing' },
  { traditional: 'Manual boiling estimation', proposed: 'Empirical optimization' },
  { traditional: 'Open / unmonitored drying', proposed: 'ESP32 IoT monitoring' },
  { traditional: 'Subjective final grading', proposed: 'ResNet-18 + VOC analysis' },
  { traditional: 'No digital traceability', proposed: 'End-to-end digital traceability' },
]

export const pipelineStages = [
  {
    id: 'raw-intake',
    number: '01',
    title: 'Raw Fish Intake',
    description: 'Batch registration and initial sensory screening for fresh tuna intake.',
    technology: 'Batch capture',
    metric: '2,536 annotated instances',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'freshness-inspection',
    number: '02',
    title: 'AI Freshness Inspection',
    description: 'YOLO11s-based detection and freshness classification from raw fish images and gas readings.',
    technology: 'YOLO11s + MQ-135',
    metric: 'mAP@0.5: 95.8%',
    accent: 'from-sky-500 to-indigo-500',
  },
  {
    id: 'boiling',
    number: '03',
    title: 'Intelligent Boiling',
    description: 'Boiling is adjusted using thickness, fish mass and freshness-aware thermal models.',
    technology: 'Thermal control logic',
    metric: '27.9% time reduction',
    accent: 'from-amber-500 to-orange-500',
  },
  {
    id: 'salting',
    number: '04',
    title: 'Brine Salting',
    description: 'Targeted brine concentration and salt uniformity control improve final consistency.',
    technology: '12%–15% brine',
    metric: '5.2% salt variance',
    accent: 'from-teal-500 to-cyan-500',
  },
  {
    id: 'drying-monitoring',
    number: '05',
    title: 'IoT Drying Monitoring',
    description: 'ESP32 nodes stream temperature, humidity, airflow and VOC trends in real time.',
    technology: 'ESP32 + DHT22 + MQ-135',
    metric: '99.6% MQTT delivery',
    accent: 'from-emerald-500 to-green-500',
  },
  {
    id: 'final-assessment',
    number: '06',
    title: 'Final Product Assessment',
    description: 'The dried product is graded using ResNet-18 and sensor-derived quality signals.',
    technology: 'ResNet-18',
    metric: '94.0% final accuracy',
    accent: 'from-violet-500 to-purple-500',
  },
  {
    id: 'shelf-life',
    number: '07',
    title: 'Shelf-Life Prediction',
    description: 'An Arrhenius-based engine estimates storage reliability and product longevity.',
    technology: 'Research model',
    metric: '180-day baseline',
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    id: 'traceability',
    number: '08',
    title: 'Digital Storage Traceability',
    description: 'Each batch retains a full digital trail for process history and quality review.',
    technology: 'Central dashboard',
    metric: 'End-to-end records',
    accent: 'from-slate-500 to-zinc-500',
  },
]

export const architectureSections = [
  {
    title: 'AI Layer',
    items: ['YOLO11s', 'ResNet-18'],
  },
  {
    title: 'Sensor Layer',
    items: ['MQ-135', 'DHT22', 'PT100', 'Hot-wire anemometer'],
  },
  {
    title: 'Edge Layer',
    items: ['ESP32', 'NVIDIA Jetson Orin Nano'],
  },
  {
    title: 'Communication Layer',
    items: ['MQTT', 'Wi-Fi'],
  },
  {
    title: 'Analytics Layer',
    items: ['Shelf-life prediction', 'Process optimization', 'Quality grading'],
  },
]

export const resultsSummary = {
  rawFish: {
    label: 'Raw Fish Inspection',
    metrics: [
      { key: 'mAP@0.5', before: '95.8%', after: '95.8%' },
      { key: 'Latency', before: '16.2 ms', after: '16.2 ms' },
      { key: 'FPS', before: '61.7', after: '61.7' },
    ],
  },
  processOptimization: {
    label: 'Process Optimization',
    metrics: [
      { key: 'Boiling time', before: '58.4 min', after: '42.1 min' },
      { key: 'Energy', before: '3.82 MJ/kg', after: '2.94 MJ/kg' },
      { key: 'Salt variation', before: '18.6%', after: '5.2%' },
      { key: 'Flaking loss', before: '6.8%', after: '1.1%' },
    ],
  },
  iot: {
    label: 'IoT',
    metrics: [
      { key: 'MQTT delivery', before: '99.6%', after: '99.6%' },
      { key: 'Drying duration', before: '6.5 ± 1.4 days', after: '4.2 ± 0.3 days' },
    ],
  },
  finalQuality: {
    label: 'Final Quality',
    metrics: [{ key: 'Accuracy', before: '94.0%', after: '94.0%' }],
  },
}
