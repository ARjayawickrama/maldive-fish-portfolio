import researchPaper from '../../New folder/Maldive_Fish_Research_Paper.pdf?url'
import proposalPresentation from '../../New folder/R26-IT-028_Proposal_Presentation.pdf?url'
import progressPresentationOne from '../../New folder/R26-IT-028_PP1_Presentation.pptx?url'
import progressPresentationTwo from '../../New folder/R26-IT-028_PP2_Presentation.pptx?url'

const individualProposals = import.meta.glob('../../New folder/Individual_Proposal/*.pdf', {
  eager: true,
  import: 'default',
  query: '?url',
})

const thesisDrafts = import.meta.glob('../../New folder/Thesis/*.pdf', {
  eager: true,
  import: 'default',
  query: '?url',
})

function getPdfFiles(files, detail) {
  return Object.entries(files)
    .sort(([first], [second]) => first.localeCompare(second))
    .map(([path, href]) => {
      const filename = path.split('/').pop()
      const name = decodeURIComponent(filename)
        .replace(/\.pdf$/i, '')
        .replace(/\u00ad/g, '')
        .replace(/_/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

      return { name, detail, href }
    })
}

export const documentSections = [
  {
    title: 'Research Paper',
    files: [{
      name: 'Maldive Fish Research Paper',
      detail: 'Project research paper (PDF)',
      href: researchPaper,
    }],
  },
  {
    title: 'Individual Proposals',
    files: getPdfFiles(individualProposals, 'Individual proposal (PDF)'),
  },
  {
    title: 'Thesis Drafts',
    files: getPdfFiles(thesisDrafts, 'Thesis draft (PDF)'),
  },
]

export const presentationFiles = [
  {
    name: 'Proposal Presentation',
    detail: 'PDF presentation',
    href: proposalPresentation,
  },
  {
    name: 'Progress Presentation - 1',
    detail: 'PowerPoint presentation',
    href: progressPresentationOne,
  },
  {
    name: 'Progress Presentation - 2',
    detail: 'PowerPoint presentation',
    href: progressPresentationTwo,
  },
]
