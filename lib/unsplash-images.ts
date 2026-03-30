/**
 * Тематичні зображення з Unsplash (стабільні photo-ID).
 * Параметри: формат, якість, ширина для оптимізації.
 */
const q = "auto=format&fit=crop&q=80";

export const unsplash = {
  heroMain:
    `https://images.unsplash.com/photo-1554224155-6726b3ff858f?${q}&w=1200`,
  heroSideRoad:
    `https://images.unsplash.com/photo-1503387762-592deb58ef4e?${q}&w=800`,
  heroSideMeeting:
    `https://images.unsplash.com/photo-1524178232363-1fb2b075b655?${q}&w=800`,

  vaccine:
    `https://images.unsplash.com/photo-1584036561566-baf8f0f1b144?${q}&w=800`,
  charts:
    `https://images.unsplash.com/photo-1551288049-bebda4e38f71?${q}&w=600`,
  pool:
    `https://images.unsplash.com/photo-1571902943202-507ec2618e8f?${q}&w=600`,
  wheatField:
    `https://images.unsplash.com/photo-1464226184884-fa280b87c399?${q}&w=600`,
  governmentBuilding:
    `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?${q}&w=1200`,
  digital:
    `https://images.unsplash.com/photo-1451187580459-43490279c0fa?${q}&w=800`,
  land:
    `https://images.unsplash.com/photo-1500382017468-9049fed747ef?${q}&w=600`,
  laptopOffice:
    `https://images.unsplash.com/photo-1581094794329-c8112a89af12?${q}&w=600`,
  archiveHistory:
    `https://images.unsplash.com/photo-1521587760476-6c12a4b04068?${q}&w=800`,
  sports:
    `https://images.unsplash.com/photo-1518611012118-696072aa579a?${q}&w=600`,
  schoolKids:
    `https://images.unsplash.com/photo-1503676260728-1c00da094a0b?${q}&w=600`,
  kindergarten:
    `https://images.unsplash.com/photo-1587654780291-39c9404d746b?${q}&w=600`,
  documents:
    `https://images.unsplash.com/photo-1450101499163-c8848c66ca85?${q}&w=800`,
  reportPapers:
    `https://images.unsplash.com/photo-1586281380349-632531db7ed4?${q}&w=600`,
  memorialCandles:
    `https://images.unsplash.com/photo-1517457373618-22920966687f?${q}&w=800`,
  headPortrait:
    `https://images.unsplash.com/photo-1560250097-0b93528c311a?${q}&w=400`,
  community:
    `https://images.unsplash.com/photo-1529156069898-49953e39b3ac?${q}&w=900`,
  roadWorks:
    `https://images.unsplash.com/photo-1590674899484-d5640e237abe?${q}&w=600`,
  landscaping:
    `https://images.unsplash.com/photo-1416879595882-3373a0480b5b?${q}&w=600`,
  businessMeet:
    `https://images.unsplash.com/photo-1522071820081-009f0129c71c?${q}&w=800`,

  tileCommunity:
    `https://images.unsplash.com/photo-1486406146926-c627a92ad4ab?${q}&w=600`,
  tileServices:
    `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?${q}&w=600`,
  tileDocs:
    `https://images.unsplash.com/photo-1450101499163-c8848c66ca85?${q}&w=600`,
  tileEducation:
    `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?${q}&w=600`,
  tileAnnounce:
    `https://images.unsplash.com/photo-1505373877841-8d25f7d46678?${q}&w=600`,
} as const;
