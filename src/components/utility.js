// src/components/utility.js

// Core data for the "Something's Up" framework.
// You can tweak text here without touching the UI code.
export const steps = [
  {
    id: 1,
    key: 'noticeSomethingsUp',
    title: "Step 1: Something’s Up",
    shortLabel: "Something’s Up",
    summary:
      'You notice that something doesn’t feel right and start paying attention.',
    description:
      'In this step, you tune in to the feeling that something is off. You might sense tension, discomfort, or confusion. The goal is simply to notice, name the feeling, and give yourself time to reflect instead of reacting right away.',
    points: [
      'Notice your own feelings and reactions.',
      'Pause instead of jumping straight into action.',
      'Be curious: what seems “up” here?',
    ],
  },
  {
    id: 2,
    key: 'sortingOut',
    title: 'Step 2: Sorting Out What’s Going On',
    shortLabel: 'Sorting Out',
    summary:
      'You gather more information, perspectives, and context before deciding what to do.',
    description:
      'Here you try to understand what is really happening. You might talk with others, revisit expectations, or check out assumptions. The aim is to move from “I just feel weird about this” to “I can see different parts of what’s going on.”',
    points: [
      'Ask questions and listen to more than one viewpoint.',
      'Notice power dynamics, roles, and relationships.',
      'Separate facts, assumptions, and feelings.',
    ],
  },
  {
    id: 3,
    key: 'makingAPlan',
    title: 'Step 3: Making a Plan',
    shortLabel: 'Making a Plan',
    summary:
      'You decide on possible next steps that are realistic, safe, and aligned with your values.',
    description:
      'Once you understand more about the situation, you can explore options. You consider risks, supports, and the impact of different choices. The goal is not to find the perfect answer, but to choose a thoughtful next step.',
    points: [
      'Brainstorm different options (including “do nothing yet”).',
      'Consider what feels safe and manageable for you.',
      'Think about who could support you as you act.',
    ],
  },
  {
    id: 4,
    key: 'makingItHappen',
    title: 'Step 4: Making It Happen',
    shortLabel: 'Making It Happen',
    summary:
      'You take action, reflect on what happened, and decide what comes next.',
    description:
      'In this step you try out your plan. You might talk with someone, ask for help, set a boundary, or document what’s happening. Afterwards, you reflect: What changed? How do you feel now? Do you need a new plan or more support?',
    points: [
      'Take the step you decided on (even if it’s a small one).',
      'Notice how the situation and your feelings shift.',
      'Decide whether you need to loop back to an earlier step.',
    ],
  },
];

// Optional image/audio assets – plug real files in when you have them.
// These will *not* break the app if the files don’t exist; they’ll just 404 in the browser.
export const ImageAssets = {
  framework: '/images/somethings-up.png', // e.g. public/images/somethings-up.png
};

export const AudioAssets = {
  noticeSomethingsUp: '/audio/step1-notice.mp3',
  sortingOut: '/audio/step2-sorting-out.mp3',
  makingAPlan: '/audio/step3-plan.mp3',
  makingItHappen: '/audio/step4-happen.mp3',
};

// General helper(s) if you want them later.
export const UtilityFunctions = {
  formatStepLabel(stepNumber, title) {
    return `Step ${stepNumber}: ${title}`;
  },
};
