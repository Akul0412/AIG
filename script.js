function showSection(sectionId) {
    var sections = document.getElementsByClassName('container');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    var section = document.getElementById(sectionId);
    section.style.display = 'block';
}
