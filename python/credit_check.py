import functools

def credit_check(str):
    reversed_list = list(str)
    reversed_list.reverse()

    times_two_list = times_two_e_other(reversed_list)
    return summing_results(times_two_list)


def times_two_e_other(list_nums):
    for i in range(len(list_nums)):
        if i % 2 != 0:
            if int(list_nums[i]) * 2 > 9:
                list_nums[i] = adding_up_large_nums(int(list_nums[i]) * 2)
            else:
                list_nums[i] = int(list_nums[i]) * 2
        else:
            list_nums[i] = int(list_nums[i])
    return list_nums


def adding_up_large_nums(num):
    list_num = list(str(num))
    return functools.reduce(lambda a, b: int(a) + int(b), list_num) 


def summing_results(list):
    return "The number is valid!" if functools.reduce(lambda a, b: a + b, list) % 10 == 0 else "The number is invalid!"
