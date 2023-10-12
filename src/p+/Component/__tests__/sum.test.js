import { sum } from "..sum/";
test("Check sum of 2 positive numbers", ()=>{
    expect(sum(2,5)).tobe(7);
});