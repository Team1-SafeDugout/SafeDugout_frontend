document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.team-stats-switch button');
  const pitcherTable = document.getElementById('team-pitcher-table');
  const batterTable = document.getElementById('team-batter-table');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // 버튼 클릭 시 변경
      const tab = button.getAttribute('data-tab');
      if (tab === 'pitcher') {
        pitcherTable.style.display = 'block';
        batterTable.style.display = 'none';
      } else if (tab === 'batter') {
        pitcherTable.style.display = 'none';
        batterTable.style.display = 'block';
      }
    });
  });
});
