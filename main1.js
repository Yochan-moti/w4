const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は 華氏45度だったので、:insertx:は散歩に出かけた。彼は :inserty:のところに着くと、しばらくの間、食べ続け、そして :insertz:になりました。 テンプラニンジャはマーベラスだね。';
const insertX = ['ハローキティ', 'スヌーピー', 'エルモ'];
const insertY = ['マクドナルド', 'モス', 'ケンタッキーフライドチキン'];
const insertZ = ['お腹いっぱい', '歩行困難', '幸せ'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':inserty:',yItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('テンプラニンジャ', name);
  }

  if (document.getElementById("jp").checked) {
//     const weight = `${Math.round(300*0.0714286)} stone`;
//     const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('華氏45度', '気温10度');
    newStory = newStory.replace('マーベラス', '最高');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
