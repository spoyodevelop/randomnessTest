import { MissionUtils } from '@woowacourse/mission-utils';
// 필요한 횟수와 숫자 범위 설정
const iterations = 200000;
const min = 1;
const max = 45;
const count = 6;

// 각 숫자의 출현 빈도를 기록할 객체 초기화
const frequency = Array.from({ length: max }, () => 0);

// MissionUtils.Random.pickUniqueNumbersInRange을 200,000번 실행하여 결과를 기록
for (let i = 0; i < iterations; i++) {
  const numbers = MissionUtils.Random.pickUniqueNumbersInRange(min, max, count);
  numbers.forEach((number) => {
    frequency[number - 1]++; // 1부터 시작하므로 인덱스 조정
  });
}

// 출현 빈도 출력
frequency.forEach((freq, index) => {
  console.log(`숫자 ${index + 1}: ${freq} 번뽑힘`);
});

// 평균 빈도와 편차 계산
const totalSum = frequency.reduce((acc, val) => acc + val, 0);
const average = totalSum / max;
const deviations = frequency.map((freq) => freq - average);
const deviationSum = deviations.reduce((acc, val) => acc + val ** 2, 0);
const standardDeviation = Math.sqrt(deviationSum / max);

console.log(`평균 값: ${average}`);
console.log(`Standard deviation: ${standardDeviation}`);
