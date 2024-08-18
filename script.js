const chapters = [
    { file: 'pdfs/chapter1.pdf', title: 'Chapter 1: New Beginnings' },
    { file: 'chapter2.pdf', title: 'Chapter 2: Thamim\'s Tales of Woe' },
    { file: 'chapter3.pdf', title: 'Chapter 3: A Clash of Wills' },
    // Add more chapters here
];

let currentChapterIndex = 0;

function updateChapter() {
    const viewer = document.getElementById('pdf-viewer');
    const chapterTitle = document.getElementById('current-chapter');

    viewer.src = chapters[currentChapterIndex].file;
    chapterTitle.textContent = chapters[currentChapterIndex].title;
}

function prevChapter() {
    if (currentChapterIndex > 0) {
        currentChapterIndex--;
        updateChapter();
    }
}

function nextChapter() {
    if (currentChapterIndex < chapters.length - 1) {
        currentChapterIndex++;
        updateChapter();
    }
}
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
