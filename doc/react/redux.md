# redux

## temporary

## 一、介绍 & Introduction
- redux是js应用程序中可预测的状态容器
- redux可以帮助你编写表现一致、可以运行在不同环境、容易测试的程序
- 另外，它给开发者提供了非常棒的体验，
- 你可以一起使用redux和react，或者和其他视图库一起使用

### 安装 & installation

### 动机 & motivation

## 核心思想 & core cpmcepts

### 三个原则 & Three Principles

### 现有技术 & Prior Art

### 学习资源 & learning Resources

### 生态 & Ecosystem

### 实例 & Example

## 二、教程 & Tutorias

## 三、案例

## 四、常见问题 & FAQ

## 五、风格指南 & Style Guide

## 六、其他 & Other
### 术语 & Glossary
### 疑难解答 & Troubleshooting

## 七、API索引

## 八、Toolkit

## 九、 源码分析
### 0 tem
1. 通过reducer实现路由？action.type对应function

### 1. createStore
返回一个store对象
```js
return {
    dispatch, // 派发action
    subscribe, // push listener,并返回unsubscribe
    getState, // 返回 currentState
    replaceReducer, // 懒加载 currentReducer = nextReducer
    [$$observable]: observable
  }
```
### 2 reducer
1. 纯函数
   1. 相同的输入产生相同的输出
   2. 不改变外部作用域变量


  

