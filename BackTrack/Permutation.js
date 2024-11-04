/**
 * 题目：全排列
 * 往m个箱子里放置n个小球，请问有几种方法
 * @param {number[]} nums
 */
const QuanPai = (nums) => {
	const ways = [];
	const used = [];

	const backtrack = (nums, track) => {
		if (track.length == nums.length) {
			// console.log()
			ways.push(track.slice());
			return;
		}

		for (let i = 0; i < nums.length; i++) {
			const num = nums[i];
			if (used.includes(num)) {
				continue;
			}
			// 选择该元素
			track.push(num);
			used.push(num);
			// 进入下一层
			backtrack(nums, track);
			// 删除该元素
			track.pop();
			used.pop();
		}
	};

	backtrack(nums, []);

	return ways;
};

const nums = [1, 2, 3];
const ways = QuanPai(nums);
console.log("ways: ", ways);
