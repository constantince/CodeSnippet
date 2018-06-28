/**
 * Created by xeowell on 2017/5/24.
 * @flow
 * h1 ~ h6, p, 等定义, 模拟web
 */

import React from 'react';

import {
  Button,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextProperties,
  TouchableOpacity,
  View
} from 'react-native';
import {colors, compStyles} from '../common/Theme';
import FontStyle from '../styles/FontSize';
import EmptyDataView from './EmptyDataView';


const styles = StyleSheet.create({
  bagaed:    {
    width:           150,
    height:          30,
    textAlign:       'center',
    borderRadius:    2,
    marginTop:       20,
    marginBottom:    20,
    lineHeight:      25,
    backgroundColor: '#d5d5d5',
    color:           '#FFF'
  },
  title:     {
    color: colors.titleTextColor,
  },
  listFont:  {
    color: colors.listTextColor,
  },
  darkGrey:  {
    color: colors.darkGreyTextColor,
  },
  grey:      {
    color: colors.greyTextColor,
  },
  important: {
    color: colors.importantColor,
  }
});


export const Div = (props: any) => (
  <View {...props}>
    {props.children}
  </View>
);

//语义化标签
export const Header = Div;

export const Footer = Div;

export const Section = Div;

export const Article = Div;

export const Nav = Div;
//Li 多行列表内可点击且有反馈的组建
export const Li  = (props: any) => (
  <TouchableOpacity activeOpacity={props.activeOpacity || .3} {...props}>
    {props.children}
  </TouchableOpacity>
);

//横向排列盒子 ref、key等值是无法通过列举“...”符号传入的，所以需要做单独处理
const flex = (style) => (props: any) => (
  <View {...props} style={[style, props.style]}>
    {props.children}
  </View>
);

//横向排列盒子
export const FlexRowBox = flex(compStyles.row);

//横向排列盒子子元素 用来横向排列均分子元素，的布局
export const FlexRowChildBox = flex(Object.assign({}, compStyles.row, {flex: 1}));

//纵向排列盒子
export const FlexColumnBox = flex(compStyles.column);

export const FlexColumnChildBox = flex(Object.assign({}, compStyles.column, {flex: 1}));

//有序列表 滚动列表，装载不同结构的多个组件，
export const Ol = (props: any) => (
  <ScrollView  {...props}>
    {props.children}
  </ScrollView>
);

//无序列表，装载相同结构的多个结构，适应长列表，异步渲染
export const Ul = (props: any) => {

  let {data, myref, onScroll, style, renderRow, onEndReached, onEndReachedThreshold, ...otherProps} = props;

  const objectSouce = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  const source = objectSouce.cloneWithRows(data);

  const renderFooter = () => {
    return data.length === 0 ? <EmptyDataView/> : null;
  };

  return (
    <ListView {...otherProps} onScroll={onScroll}
              ref={myref}
              dataSource={source}
              renderRow={renderRow}
              renderFooter={renderFooter}
              enableEmptySections={true}
              onEndReached={onEndReached}
              onEndReachedThreshold={onEndReachedThreshold}
    />
  );
};

//按钮
export const Btn = (props: any) => (
  <Button {...props} />
);

export const OutLineButton = (props: any) => {
  const propsInTouchableComponent = ['backgroundColor', 'padding', 'borderColor', 'borderWidth', 'borderRadius'];
  const propsInText               = ['height', 'width', 'color', 'fontSize'];
  let touchableStylesValue        = {};
  let textStylesValue             = {};
  //要将不同的props.style拆分，装入不同的组建中，才能起作用
  propsInTouchableComponent.forEach(v => {
    if (props.style[v] !== undefined) {
      touchableStylesValue[v] = props.style[v];
    }
  });
  propsInText.forEach(v => {
    if (props.style[v] !== undefined) {
      textStylesValue[v] = props.style[v];
    }
  });

  const touchableStyles = {style: touchableStylesValue};
  const textStyles      = {style: textStylesValue};

  return (<TouchableOpacity onPress={props.onPress} activeOpacity={props.activeOpacity || 0.3} {...touchableStyles} >
    <Text {...textStyles}>{props.children}</Text>
  </TouchableOpacity>);
};

//图片
export const Img = (props: any) => (
  <Image {...props}/>
);

// 输入框
export const Input = (props: any) => (
  <TextInput {...props} onChangeText={props.onChange}/>
);


const heading = (style) => (props: TextProperties) => (
  <Text {...props} style={[style, props.style]}>
    {props.children}
  </Text>
);

// 字体
const font = (size) => (props: any) => (
  <Text {...props} style={[FontStyle[size], props.style]}>
    {props.children}
  </Text>
);

//跟设计MM沟通 设置经常用到的字体组件
export const F12 = font(12);
export const F13 = font(13);
export const F14 = font(14);
export const F15 = font(15);
export const F16 = font(16);
export const F18 = font(18);
export const F20 = font(20);
export const F22 = font(22);
export const F24 = font(24);
export const F26 = font(26);
export const F28 = font(28);
export const F36 = font(36);
export const F32 = font(32);
export const F30 = font(30);
export const F40 = font(40);
export const F50 = font(50);


export const H1            = heading(compStyles.h1);
export const H2            = heading(compStyles.h2);
export const H3            = heading(compStyles.h3);
export const H4            = heading(compStyles.h4);
export const H5            = heading(compStyles.h5);
export const H6            = heading(compStyles.h6);
export const P             = heading(compStyles.p);
export const A             = heading(compStyles.a);
export const Strong        = heading(compStyles.strong);
export const B             = heading(compStyles.strong);
export const Span          = heading(compStyles.span);
export const Title         = heading(styles.title);
export const ListText      = heading(styles.listFont);
export const DarkText      = heading(styles.darkGrey);
export const GreyText      = heading(styles.grey);
export const ImportantText = heading(styles.orangeColor);
