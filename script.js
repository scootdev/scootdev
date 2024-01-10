document.getElementById('resumeIcon').addEventListener('click', function() {
    var resumePdf = document.getElementById('resumePdf');
    if (resumePdf.classList.contains('hidden')) {
        resumePdf.classList.remove('hidden');
    } else {
        resumePdf.classList.add('hidden');
    }
});

// Add dark/light mode switch functionality
