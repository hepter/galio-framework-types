declare module 'galio-framework/Accordion' {
    export default Accordion;
    function Accordion({ theme, dataArray, icon, expandedIcon, headerStyle, contentStyle, opened, onAccordionOpen, onAccordionClose, listStyle, style }: {
        theme: any;
        dataArray: any;
        icon: any;
        expandedIcon: any;
        headerStyle: any;
        contentStyle: any;
        opened: any;
        onAccordionOpen: any;
        onAccordionClose: any;
        listStyle: any;
        style: any;
    }): any;
    namespace Accordion {
        namespace propTypes {
            const theme: any;
            const dataArray: any;
            const opened: any;
            const listStyle: any;
            const style: any;
            const icon: any;
            const expandedIcon: any;
            const headerStyle: any;
            const contentStyle: any;
            const onAccordionClose: any;
            const onAccordionOpen: any;
        }
        namespace defaultProps {
            export { GalioTheme as theme };
            const opened_1: number;
            export { opened_1 as opened };
        }
    }
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/atomic/atoms/Button' {
    function _default({ color, children, capitalize, disabled, iconSize, icon, iconRight, iconFamily, iconColor, loading, loadingSize, lowercase, onlyIcon, opacity, round, style, size, shadowless, shadowColor, styles, theme, textStyle, uppercase, ...rest }: {
        [x: string]: any;
        color: any;
        children: any;
        capitalize: any;
        disabled: any;
        iconSize: any;
        icon: any;
        iconRight: any;
        iconFamily: any;
        iconColor: any;
        loading: any;
        loadingSize: any;
        lowercase: any;
        onlyIcon: any;
        opacity: any;
        round: any;
        style: any;
        size: any;
        shadowless: any;
        shadowColor: any;
        styles: any;
        theme: any;
        textStyle: any;
        uppercase: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            export const color: string;
            export const size: string;
            export const disabled: boolean;
            export const uppercase: boolean;
            export const lowercase: boolean;
            export const capitalize: boolean;
            export const shadowless: boolean;
            export const shadowColor: boolean;
            export const onlyIcon: boolean;
            export const loading: boolean;
            export const loadingSize: string;
            export const opacity: number;
            export const icon: boolean;
            export const iconRight: boolean;
            export const iconFamily: boolean;
            export const iconSize: number;
            export const iconColor: null;
            export const styles: {};
            export { GalioTheme as theme };
        }
        const propTypes: any;
    }
    export default _default;
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/atomic/atoms/Input' {
    function _default({ style, textInputStyle, type, placeholderTextColor, label, labelStyles, color, help, helpStyles, bgColor, borderless, viewPass, rounded, icon, family, left, right, iconColor, topHelp, bottomHelp, theme, styles, iconSize, iconContent, password, onRef, error, ...rest }: {
        [x: string]: any;
        style: any;
        textInputStyle: any;
        type: any;
        placeholderTextColor: any;
        label: any;
        labelStyles: any;
        color: any;
        help: any;
        helpStyles: any;
        bgColor: any;
        borderless: any;
        viewPass: any;
        rounded: any;
        icon: any;
        family: any;
        left: any;
        right: any;
        iconColor: any;
        topHelp: any;
        bottomHelp: any;
        theme: any;
        styles: any;
        iconSize: any;
        iconContent: any;
        password: any;
        onRef: any;
        error: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            export const type: string;
            export const password: boolean;
            export const placeholderTextColor: null;
            export const label: null;
            export const help: null;
            export const rounded: boolean;
            export const left: boolean;
            export const right: boolean;
            export const viewPass: boolean;
            export const topHelp: boolean;
            export const bottomHelp: boolean;
            export const style: null;
            export const textInputStyle: null;
            export const borderless: boolean;
            export const bgColor: null;
            export const iconColor: null;
            export const icon: null;
            export const family: null;
            export const color: null;
            export const styles: {};
            export const iconSize: null;
            export const iconContent: null;
            export { GalioTheme as theme };
            export const onRef: null;
        }
        namespace propTypes {
            const style_1: any;
            export { style_1 as style };
            const textInputStyle_1: any;
            export { textInputStyle_1 as textInputStyle };
            const type_1: any;
            export { type_1 as type };
            const password_1: any;
            export { password_1 as password };
            const placeholderTextColor_1: any;
            export { placeholderTextColor_1 as placeholderTextColor };
            const label_1: any;
            export { label_1 as label };
            const bgColor_1: any;
            export { bgColor_1 as bgColor };
            const rounded_1: any;
            export { rounded_1 as rounded };
            const borderless_1: any;
            export { borderless_1 as borderless };
            const viewPass_1: any;
            export { viewPass_1 as viewPass };
            const iconColor_1: any;
            export { iconColor_1 as iconColor };
            const icon_1: any;
            export { icon_1 as icon };
            const family_1: any;
            export { family_1 as family };
            const color_1: any;
            export { color_1 as color };
            const help_1: any;
            export { help_1 as help };
            const left_1: any;
            export { left_1 as left };
            const right_1: any;
            export { right_1 as right };
            const topHelp_1: any;
            export { topHelp_1 as topHelp };
            const bottomHelp_1: any;
            export { bottomHelp_1 as bottomHelp };
            const styles_1: any;
            export { styles_1 as styles };
            const iconSize_1: any;
            export { iconSize_1 as iconSize };
            const iconContent_1: any;
            export { iconContent_1 as iconContent };
            export const theme: any;
            const onRef_1: any;
            export { onRef_1 as onRef };
        }
    }
    export default _default;
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/atomic/atoms/Link' {
    function _default({ children, onPress, theme, ...rest }: {
        [x: string]: any;
        children: any;
        onPress: any;
        theme: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            export const children: null;
            export { GalioTheme as theme };
        }
        namespace propTypes {
            const children_1: any;
            export { children_1 as children };
            export const theme: any;
            export const onPress: any;
        }
    }
    export default _default;
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/atomic/ions/Icon' {
    function _default({ name, family, size, color, styles, theme, medium, large, ...rest }: {
        [x: string]: any;
        name: any;
        family: any;
        size: any;
        color: any;
        styles: any;
        theme: any;
        medium: any;
        large: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            export const name: null;
            export const family: null;
            export const size: null;
            export const color: null;
            export const styles: {};
            export { GalioTheme as theme };
        }
        namespace propTypes {
            const name_1: any;
            export { name_1 as name };
            const family_1: any;
            export { family_1 as family };
            const size_1: any;
            export { size_1 as size };
            const color_1: any;
            export { color_1 as color };
            const styles_1: any;
            export { styles_1 as styles };
            export const theme: any;
        }
    }
    export default _default;
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/atomic/ions/Text' {
    function _default({ style, h1, h2, h3, h4, h5, h6, p, body, small, muted, neutral, size, color, bold, italic, center, children, styles, theme, ...rest }: {
        [x: string]: any;
        style: any;
        h1: any;
        h2: any;
        h3: any;
        h4: any;
        h5: any;
        h6: any;
        p: any;
        body: any;
        small: any;
        muted: any;
        neutral: any;
        size: any;
        color: any;
        bold: any;
        italic: any;
        center: any;
        children: any;
        styles: any;
        theme: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            export const children: null;
            export const style: null;
            export const h1: boolean;
            export const h2: boolean;
            export const h3: boolean;
            export const h4: boolean;
            export const h5: boolean;
            export const h6: boolean;
            export const p: boolean;
            export const body: boolean;
            export const small: boolean;
            export const size: number;
            export const color: null;
            export const muted: boolean;
            export const bold: boolean;
            export const italic: boolean;
            export const styles: {};
            export { GalioTheme as theme };
        }
        namespace propTypes {
            const children_1: any;
            export { children_1 as children };
            const style_1: any;
            export { style_1 as style };
            const h1_1: any;
            export { h1_1 as h1 };
            const h2_1: any;
            export { h2_1 as h2 };
            const h3_1: any;
            export { h3_1 as h3 };
            const h4_1: any;
            export { h4_1 as h4 };
            const h5_1: any;
            export { h5_1 as h5 };
            const h6_1: any;
            export { h6_1 as h6 };
            const p_1: any;
            export { p_1 as p };
            const body_1: any;
            export { body_1 as body };
            const small_1: any;
            export { small_1 as small };
            const size_1: any;
            export { size_1 as size };
            const color_1: any;
            export { color_1 as color };
            const muted_1: any;
            export { muted_1 as muted };
            const bold_1: any;
            export { bold_1 as bold };
            const italic_1: any;
            export { italic_1 as italic };
            const styles_1: any;
            export { styles_1 as styles };
            export const theme: any;
        }
    }
    export default _default;
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/Avatar' {
    function _default({ source, size, label, labelColor, backgroundColor, labelStyle, imageProps, imageStyle, containerStyle, styles, theme, }: {
        source: any;
        size: any;
        label: any;
        labelColor: any;
        backgroundColor: any;
        labelStyle: any;
        imageProps: any;
        imageStyle: any;
        containerStyle: any;
        styles: any;
        theme: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            const size: number;
        }
        namespace propTypes {
            export const label: any;
            export const labelColor: any;
            const size_1: any;
            export { size_1 as size };
            export const source: any;
            export const backgroundColor: any;
            export const imageProps: any;
            export const imageStyle: any;
            export const containerStyle: any;
            export const styles: any;
            export const theme: any;
        }
    }
    export default _default;

}
declare module 'galio-framework/Block' {
    function _default({ row, flex, center, middle, top, bottom, right, left, shadow, space, fluid, height, shadowColor, card, width, safe, children, style, styles, ...rest }: {
        [x: string]: any;
        row: any;
        flex: any;
        center: any;
        middle: any;
        top: any;
        bottom: any;
        right: any;
        left: any;
        shadow: any;
        space: any;
        fluid: any;
        height: any;
        shadowColor: any;
        card: any;
        width: any;
        safe: any;
        children: any;
        style: any;
        styles: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            export const row: boolean;
            export const flex: boolean;
            export const center: boolean;
            export const middle: boolean;
            export const top: boolean;
            export const bottom: boolean;
            export const right: boolean;
            export const left: boolean;
            export const card: boolean;
            export const shadow: boolean;
            export const space: null;
            export const fluid: boolean;
            export const height: null;
            export const width: null;
            export const shadowColor: null;
            export const safe: boolean;
            export const styles: {};
            export { GalioTheme as theme };
        }
        namespace propTypes {
            const row_1: any;
            export { row_1 as row };
            const flex_1: any;
            export { flex_1 as flex };
            const center_1: any;
            export { center_1 as center };
            const middle_1: any;
            export { middle_1 as middle };
            const top_1: any;
            export { top_1 as top };
            const bottom_1: any;
            export { bottom_1 as bottom };
            const right_1: any;
            export { right_1 as right };
            const card_1: any;
            export { card_1 as card };
            const left_1: any;
            export { left_1 as left };
            const shadow_1: any;
            export { shadow_1 as shadow };
            const space_1: any;
            export { space_1 as space };
            const fluid_1: any;
            export { fluid_1 as fluid };
            const height_1: any;
            export { height_1 as height };
            const width_1: any;
            export { width_1 as width };
            const shadowColor_1: any;
            export { shadowColor_1 as shadowColor };
            const safe_1: any;
            export { safe_1 as safe };
            const styles_1: any;
            export { styles_1 as styles };
            export const theme: any;
        }
    }
    export default _default;
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/Card' {
    function _default({ avatar, borderless, caption, captionColor, card, children, footerStyle, image, imageBlockStyle, imageStyle, location, locationColor, shadow, style, styles, title, titleColor, theme, ...props }: {
        [x: string]: any;
        avatar: any;
        borderless: any;
        caption: any;
        captionColor: any;
        card: any;
        children: any;
        footerStyle: any;
        image: any;
        imageBlockStyle: any;
        imageStyle: any;
        location: any;
        locationColor: any;
        shadow: any;
        style: any;
        styles: any;
        title: any;
        titleColor: any;
        theme: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            export const card: boolean;
            export const shadow: boolean;
            export const borderless: boolean;
            export const styles: {};
            export { GalioTheme as theme };
            export const title: string;
            export const titleColor: string;
            export const caption: string;
            export const captionColor: string;
            export const footerStyle: {};
            export const avatar: string;
        }
        namespace propTypes {
            const card_1: any;
            export { card_1 as card };
            const shadow_1: any;
            export { shadow_1 as shadow };
            const borderless_1: any;
            export { borderless_1 as borderless };
            const styles_1: any;
            export { styles_1 as styles };
            export const theme: any;
            const title_1: any;
            export { title_1 as title };
            const titleColor_1: any;
            export { titleColor_1 as titleColor };
            const caption_1: any;
            export { caption_1 as caption };
            const captionColor_1: any;
            export { captionColor_1 as captionColor };
            const avatar_1: any;
            export { avatar_1 as avatar };
            const footerStyle_1: any;
            export { footerStyle_1 as footerStyle };
        }
    }
    export default _default;
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/Checkbox' {
    function _default({ checkboxStyle, color, disabled, flexDirection, image, imageStyle, iconColor, iconFamily, iconName, iconSize, initialValue, label, labelStyle, onChange, style, styles, theme, }: {
        checkboxStyle: any;
        color: any;
        disabled: any;
        flexDirection: any;
        image: any;
        imageStyle: any;
        iconColor: any;
        iconFamily: any;
        iconName: any;
        iconSize: any;
        initialValue: any;
        label: any;
        labelStyle: any;
        onChange: any;
        style: any;
        styles: any;
        theme: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            export const checkboxStyle: null;
            export const color: string;
            export const disabled: boolean;
            export const flexDirection: string;
            export const iconColor: string;
            export const iconName: string;
            export const iconSize: number;
            export const iconFamily: string;
            export const image: null;
            export const imageStyle: null;
            export const initialValue: boolean;
            export const label: null;
            export const labelStyle: null;
            export function onChange(): void;
            export const styles: {};
            export { GalioTheme as theme };
        }
        namespace propTypes {
            const checkboxStyle_1: any;
            export { checkboxStyle_1 as checkboxStyle };
            const color_1: any;
            export { color_1 as color };
            const disabled_1: any;
            export { disabled_1 as disabled };
            const flexDirection_1: any;
            export { flexDirection_1 as flexDirection };
            const iconColor_1: any;
            export { iconColor_1 as iconColor };
            const iconName_1: any;
            export { iconName_1 as iconName };
            const iconSize_1: any;
            export { iconSize_1 as iconSize };
            const iconFamily_1: any;
            export { iconFamily_1 as iconFamily };
            const image_1: any;
            export { image_1 as image };
            const imageStyle_1: any;
            export { imageStyle_1 as imageStyle };
            const initialValue_1: any;
            export { initialValue_1 as initialValue };
            const label_1: any;
            export { label_1 as label };
            const labelStyle_1: any;
            export { labelStyle_1 as labelStyle };
            const onChange_1: any;
            export { onChange_1 as onChange };
            const styles_1: any;
            export { styles_1 as styles };
            export const theme: any;
        }
    }
    export default _default;
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/DeckSwiper' {
    export default DeckSwiper;
    function DeckSwiper({ onSwipeRight, onSwipeLeft, focusedElementStyle, nextElementStyle, components, style }: {
        onSwipeRight: any;
        onSwipeLeft: any;
        focusedElementStyle: any;
        nextElementStyle: any;
        components: any;
        style: any;
    }): any;
    namespace DeckSwiper {
        namespace propTypes {
            const components: any;
            const onSwipeRight: any;
            const onSwipeLeft: any;
            const focusedElementStyle: any;
            const nextElementStyle: any;
            const style: any;
        }
    }

}
declare module 'galio-framework/helpers/getIconType' {
    function _default(type: any): any;
    export default _default;

}
declare module 'galio-framework/helpers/normalize' {
    export = normalize;
    function normalize(size: any): any;

}
declare module 'galio-framework/index' {
    import Accordion from "galio-framework/Accordion";
    import Block from "galio-framework/Block";
    import Button from "galio-framework/atomic/atoms/Button";
    import Card from "galio-framework/Card";
    import Checkbox from "galio-framework/Checkbox";
    import DeckSwiper from "galio-framework/DeckSwiper";
    import Icon from "galio-framework/atomic/ions/Icon";
    import Input from "galio-framework/atomic/atoms/Input";
    import NavBar from "galio-framework/NavBar";
    import Radio from "galio-framework/Radio";
    import Slider from "galio-framework/Slider";
    import Text from "galio-framework/atomic/ions/Text";
    import Link from "galio-framework/atomic/atoms/Link";
    import Toast from "galio-framework/Toast";
    import Switch from "galio-framework/Switch";
    import theme from "galio-framework/theme/index";
    import { withGalio } from "galio-framework/theme/index";
    import { GalioProvider } from "galio-framework/theme/index";
    import { useGalioTheme } from "galio-framework/theme/index";
    export { Accordion, Block, Button, Card, Checkbox, DeckSwiper, Icon, Input, NavBar, Radio, Slider, Text, Link, Toast, Switch, theme, withGalio, GalioProvider, useGalioTheme };

}
declare module 'galio-framework/NavBar' {
    function _default({ back, hideLeft, hideRight, left, leftStyle, leftIconColor, leftHitSlop, leftIconSize, leftIconName, leftIconFamily, onLeftPress, right, rightStyle, style, styles, transparent, theme, title, titleStyle, }: {
        back: any;
        hideLeft: any;
        hideRight: any;
        left: any;
        leftStyle: any;
        leftIconColor: any;
        leftHitSlop: any;
        leftIconSize: any;
        leftIconName: any;
        leftIconFamily: any;
        onLeftPress: any;
        right: any;
        rightStyle: any;
        style: any;
        styles: any;
        transparent: any;
        theme: any;
        title: any;
        titleStyle: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            export const back: boolean;
            export const transparent: boolean;
            export const title: null;
            export const titleStyle: null;
            export const left: null;
            export const leftStyle: null;
            export const leftIconColor: null;
            export function onLeftPress(): void;
            export const leftHitSlop: null;
            export const right: null;
            export const rightStyle: null;
            export const style: null;
            export const styles: {};
            export { GalioTheme as theme };
        }
        namespace propTypes {
            const back_1: any;
            export { back_1 as back };
            const transparent_1: any;
            export { transparent_1 as transparent };
            const title_1: any;
            export { title_1 as title };
            const titleStyle_1: any;
            export { titleStyle_1 as titleStyle };
            const left_1: any;
            export { left_1 as left };
            const leftStyle_1: any;
            export { leftStyle_1 as leftStyle };
            const leftIconColor_1: any;
            export { leftIconColor_1 as leftIconColor };
            const onLeftPress_1: any;
            export { onLeftPress_1 as onLeftPress };
            const leftHitSlop_1: any;
            export { leftHitSlop_1 as leftHitSlop };
            const right_1: any;
            export { right_1 as right };
            const rightStyle_1: any;
            export { rightStyle_1 as rightStyle };
            const style_1: any;
            export { style_1 as style };
            const styles_1: any;
            export { styles_1 as styles };
            export const theme: any;
            export const leftIconName: any;
            export const leftIconFamily: any;
            export const hideLeft: any;
            export const hideRight: any;
        }
    }
    export default _default;
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/Radio' {
    function _default({ color, containerStyle, disabled, flexDirection, initialValue, label, labelStyle, onChange, radioOuterStyle, radioInnerStyle, styles, theme, }: {
        color: any;
        containerStyle: any;
        disabled: any;
        flexDirection: any;
        initialValue: any;
        label: any;
        labelStyle: any;
        onChange: any;
        radioOuterStyle: any;
        radioInnerStyle: any;
        styles: any;
        theme: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            export const color: string;
            export const disabled: boolean;
            export const flexDirection: string;
            export const initialValue: boolean;
            export const label: null;
            export const labelStyle: null;
            export function onChange(): void;
            export const styles: {};
            export { GalioTheme as theme };
        }
        namespace propTypes {
            const color_1: any;
            export { color_1 as color };
            export const containerStyle: any;
            export const radioOuterStyle: any;
            export const radioInnerStyle: any;
            const disabled_1: any;
            export { disabled_1 as disabled };
            const flexDirection_1: any;
            export { flexDirection_1 as flexDirection };
            const initialValue_1: any;
            export { initialValue_1 as initialValue };
            const label_1: any;
            export { label_1 as label };
            const labelStyle_1: any;
            export { labelStyle_1 as labelStyle };
            const onChange_1: any;
            export { onChange_1 as onChange };
            const styles_1: any;
            export { styles_1 as styles };
            export const theme: any;
        }
    }
    export default _default;
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/Slider' {
    var _default: typeof Slider;
    export default _default;
    class Slider {
        constructor(props: any);
        state: {
            containerSize: {
                width: number;
                height: number;
            };
            trackSize: {
                width: number;
                height: number;
            };
            thumbSize: {
                width: number;
                height: number;
            };
            measured: boolean;
        };
        position: any;
        _panResponder: any;
        _previousLeft: number;
        _getRatio: (value: any) => number;
        _getThumbLeft: (value: any) => number;
        _getCurrentVal: () => any;
        _setCurrentValue: (value: any) => any;
        _getValue: (gestureState: any) => number;
        _measureContainer: (x: any) => void;
        _measureTrack: (x: any) => void;
        _measureThumb: (x: any) => void;
        _handleMeasure: (name: any, x: any) => void;
        _fireChangeEvent: (event: any) => void;
        render(): any;
    }
    namespace Slider {
        namespace defaultProps {
            export const disabled: boolean;
            export const minimumValue: number;
            export const maximumValue: number;
            export const trackStyle: {};
            export const thumbStyle: {};
            export const value: number;
            export const step: number;
            export const style: null;
            export { GalioTheme as theme };
            export function onSlidingComplete(): void;
            export function onSlidingStart(): void;
            export function onValueChange(): void;
        }
        namespace propTypes {
            const value_1: any;
            export { value_1 as value };
            const disabled_1: any;
            export { disabled_1 as disabled };
            const minimumValue_1: any;
            export { minimumValue_1 as minimumValue };
            const maximumValue_1: any;
            export { maximumValue_1 as maximumValue };
            const trackStyle_1: any;
            export { trackStyle_1 as trackStyle };
            const thumbStyle_1: any;
            export { thumbStyle_1 as thumbStyle };
            const step_1: any;
            export { step_1 as step };
            export const styles: any;
            const onSlidingComplete_1: any;
            export { onSlidingComplete_1 as onSlidingComplete };
            const onSlidingStart_1: any;
            export { onSlidingStart_1 as onSlidingStart };
            const onValueChange_1: any;
            export { onValueChange_1 as onValueChange };
        }
    }
    import GalioTheme from "galio-framework/theme/index";

}
declare module 'galio-framework/Switch' {
    function _default({ initialValue, onChange, color, disabled, trackColor, ios_backgroundColor, ...rest }: {
        [x: string]: any;
        initialValue: any;
        onChange: any;
        color: any;
        disabled: any;
        trackColor: any;
        ios_backgroundColor: any;
    }): any;
    namespace _default {
        namespace defaultProps {
            const color: string;
            const ios_backgroundColor: string;
            namespace trackColor {
                const _false: string;
                export { _false as false };
                const _true: string;
                export { _true as true };
            }
            const disabled: boolean;
            const initialValue: boolean;
        }
        const propTypes: any;
    }
    export default _default;

}
declare module 'galio-framework/theme/colors' {
    export namespace SOCIAL {
        const FACEBOOK: string;
        const TWITTER: string;
        const DRIBBBLE: string;
    }
    export namespace THEME {
        const THEME: string;
        const PRIMARY: string;
        const DARK_PRIMARY: string;
        const LIGHT_PRIMARY: string;
        const BRIGHT_PRIMARY: string;
        const INFO: string;
        const DARK_INFO: string;
        const LIGHT_INFO: string;
        const BRIGHT_INFO: string;
        const DANGER: string;
        const DARK_DANGER: string;
        const LIGHT_DANGER: string;
        const BRIGHT_DANGER: string;
        const WARNING: string;
        const DARK_WARNING: string;
        const LIGHT_WARNING: string;
        const BRIGHT_WARNING: string;
        const SUCCESS: string;
        const DARK_SUCCESS: string;
        const LIGHT_SUCCESS: string;
        const BRIGHT_SUCCESS: string;
        const WHITE: string;
        const DARK_BLACK: string;
        const BLACK: string;
        const BRIGHT_BLACK: string;
        const LIGHT_BLACK: string;
        const DARK_SECONDARY: string;
        const SECONDARY: string;
        const BRIGHT_SECONDARY: string;
        const LIGHT_SECONDARY: string;
        const DARK_GREY: string;
        const GREY: string;
        const BRIGHT_GREY: string;
        const LIGHT_GREY: string;
        const NEUTRAL: string;
    }
    export namespace COMPONENTS {
        const INPUT: string;
        const PLACEHOLDER: string;
        const NAVBAR: string;
        const BLOCK: string;
        const ICON: string;
    }
    export default COLORS;
    namespace COLORS {
        const MUTED: string;
        const TRANSPARENT: string;
    }

}
declare module 'galio-framework/theme/index' {
    /**
     * useGalioTheme
     * Galio custom hook which returns the theme object
     */
    export function useGalioTheme(): any;
    /**
     * @template C
     * @param {C} Component
     * @param {object} styles
     * @returns {C}
     */

    export function withGalio<P>(component: P, styles: (theme: object) => object): P;
    export default GalioTheme;
    export class GalioProvider {
        static defaultProps: {
            children: null;
            theme: {};
        };
        render(): any;
    }
    export namespace GalioProvider {
        namespace propTypes {
            const children: any;
            const theme: any;
        }
    }
    namespace GalioTheme {
        export { GALIO_COLORS as COLORS };
        export { GALIO_SIZES as SIZES };
    }
    import GALIO_COLORS from "galio-framework/theme/colors";
    import GALIO_SIZES from "galio-framework/theme/sizes";

}
declare module 'galio-framework/theme/sizes' {
    export const BASE: 16;
    export default SIZES;
    namespace SIZES {
        export { BASE };
        export { BASE as FONT };
        export const OPACITY: number;
        export const BORDER_RADIUS: number;
        export const BORDER_WIDTH: number;
        export const H1: number;
        export const H2: number;
        export const H3: number;
        export const H4: number;
        export const H5: number;
        export const H6: number;
        export const BODY: number;
        export const SMALL: number;
        export { BASE as ICON };
        export const ICON_MEDIUM: number;
        export const ICON_LARGE: number;
        export const BUTTON_WIDTH: number;
        export const BUTTON_HEIGHT: number;
        export const BUTTON_SHADOW_RADIUS: number;
        export const BLOCK_SHADOW_OPACITY: number;
        export const BLOCK_SHADOW_RADIUS: number;
        export const ANDROID_ELEVATION: number;
        export const CARD_BORDER_RADIUS: number;
        export const CARD_BORDER_WIDTH: number;
        export const CARD_WIDTH: number;
        export const CARD_MARGIN_VERTICAL: number;
        export const CARD_FOOTER_HORIZONTAL: number;
        export const CARD_FOOTER_VERTICAL: number;
        export const CARD_AVATAR_WIDTH: number;
        export const CARD_AVATAR_HEIGHT: number;
        export const CARD_AVATAR_RADIUS: number;
        export const CARD_IMAGE_HEIGHT: number;
        export const CARD_ROUND: number;
        export const CARD_ROUNDED: number;
        export const INPUT_BORDER_RADIUS: number;
        export const INPUT_BORDER_WIDTH: number;
        export const INPUT_HEIGHT: number;
        export { BASE as INPUT_HORIZONTAL };
        export const INPUT_VERTICAL_TEXT: number;
        export const INPUT_VERTICAL_LABEL: number;
        export const INPUT_TEXT: number;
        export const INPUT_ROUNDED: number;
        export const NAVBAR_HEIGHT: number;
        export { BASE as NAVBAR_VERTICAL };
        export const NAVBAR_TITLE_FLEX: number;
        export const NAVBAR_TITLE_HEIGHT: number;
        export const NAVBAR_TITLE_TEXT: number;
        export const NAVBAR_LEFT_FLEX: number;
        export const NAVBAR_LEFT_HEIGHT: number;
        export { BASE as NAVBAR_LEFT_MARGIN };
        export const NAVBAR_RIGHT_FLEX: number;
        export const NAVBAR_RIGHT_HEIGHT: number;
        export { BASE as NAVBAR_RIGHT_MARGIN };
        export const CHECKBOX_WIDTH: number;
        export const CHECKBOX_HEIGHT: number;
        export const TRACK_SIZE: number;
        export const THUMB_SIZE: number;
        export const RADIO_WIDTH: number;
        export const RADIO_HEIGHT: number;
        export const RADIO_THICKNESS: number;
    }

}
declare module 'galio-framework/Toast' {
    var _default: typeof Toast;
    export default _default;
    class Toast {
        static propTypes: {
            children: any;
            isShow: any;
            positionIndicator: any;
            positionOffset: any;
            fadeInDuration: any;
            fadeOutDuration: any;
            color: any;
            round: any;
            style: any;
            textStyle: any;
            styles: any;
            theme: any;
        };
        static defaultProps: {
            positionIndicator: string;
            positionOffset: number;
            fadeInDuration: number;
            fadeOutDuration: number;
            color: string;
            round: boolean;
            style: null;
            textStyle: null;
            styles: {};
            theme: {
                COLORS: {
                    FACEBOOK: string;
                    TWITTER: string;
                    DRIBBBLE: string;
                    THEME: string;
                    PRIMARY: string;
                    DARK_PRIMARY: string;
                    LIGHT_PRIMARY: string;
                    BRIGHT_PRIMARY: string;
                    INFO: string;
                    DARK_INFO: string;
                    LIGHT_INFO: string;
                    BRIGHT_INFO: string;
                    DANGER: string;
                    DARK_DANGER: string;
                    LIGHT_DANGER: string;
                    BRIGHT_DANGER: string;
                    WARNING: string;
                    DARK_WARNING: string;
                    LIGHT_WARNING: string;
                    BRIGHT_WARNING: string;
                    SUCCESS: string;
                    DARK_SUCCESS: string;
                    LIGHT_SUCCESS: string;
                    BRIGHT_SUCCESS: string;
                    WHITE: string;
                    DARK_BLACK: string;
                    BLACK: string;
                    BRIGHT_BLACK: string;
                    LIGHT_BLACK: string;
                    DARK_SECONDARY: string;
                    SECONDARY: string;
                    BRIGHT_SECONDARY: string;
                    LIGHT_SECONDARY: string;
                    DARK_GREY: string;
                    GREY: string;
                    BRIGHT_GREY: string;
                    LIGHT_GREY: string;
                    NEUTRAL: string;
                    INPUT: string;
                    PLACEHOLDER: string;
                    NAVBAR: string;
                    BLOCK: string;
                    ICON: string;
                    MUTED: string;
                    TRANSPARENT: string;
                };
                SIZES: {
                    BASE: number;
                    FONT: number;
                    OPACITY: number;
                    BORDER_RADIUS: number;
                    BORDER_WIDTH: number;
                    H1: number;
                    H2: number;
                    H3: number;
                    H4: number;
                    H5: number;
                    H6: number;
                    BODY: number;
                    SMALL: number;
                    ICON: number;
                    ICON_MEDIUM: number;
                    ICON_LARGE: number;
                    BUTTON_WIDTH: number;
                    BUTTON_HEIGHT: number;
                    BUTTON_SHADOW_RADIUS: number;
                    BLOCK_SHADOW_OPACITY: number;
                    BLOCK_SHADOW_RADIUS: number;
                    ANDROID_ELEVATION: number;
                    CARD_BORDER_RADIUS: number;
                    CARD_BORDER_WIDTH: number;
                    CARD_WIDTH: number;
                    CARD_MARGIN_VERTICAL: number;
                    CARD_FOOTER_HORIZONTAL: number;
                    CARD_FOOTER_VERTICAL: number;
                    CARD_AVATAR_WIDTH: number;
                    CARD_AVATAR_HEIGHT: number;
                    CARD_AVATAR_RADIUS: number;
                    CARD_IMAGE_HEIGHT: number;
                    CARD_ROUND: number;
                    CARD_ROUNDED: number;
                    INPUT_BORDER_RADIUS: number;
                    INPUT_BORDER_WIDTH: number;
                    INPUT_HEIGHT: number;
                    INPUT_HORIZONTAL: number;
                    INPUT_VERTICAL_TEXT: number;
                    INPUT_VERTICAL_LABEL: number;
                    INPUT_TEXT: number;
                    INPUT_ROUNDED: number;
                    NAVBAR_HEIGHT: number;
                    NAVBAR_VERTICAL: number;
                    NAVBAR_TITLE_FLEX: number;
                    NAVBAR_TITLE_HEIGHT: number;
                    NAVBAR_TITLE_TEXT: number;
                    NAVBAR_LEFT_FLEX: number;
                    NAVBAR_LEFT_HEIGHT: number;
                    NAVBAR_LEFT_MARGIN: number;
                    NAVBAR_RIGHT_FLEX: number;
                    NAVBAR_RIGHT_HEIGHT: number;
                    NAVBAR_RIGHT_MARGIN: number;
                    CHECKBOX_WIDTH: number;
                    CHECKBOX_HEIGHT: number;
                    TRACK_SIZE: number;
                    THUMB_SIZE: number;
                    RADIO_WIDTH: number;
                    RADIO_HEIGHT: number;
                    RADIO_THICKNESS: number;
                };
            };
        };
        state: {
            isShow: any;
            fadeAnim: any;
        };
        animation: any;
        visibilityTimeout: any;
        componentDidUpdate(prevProps: any): void;
        componentWillUnmount(): void;
        setVisibility: (isShow: any) => any;
        getTopPosition: () => any;
        renderContent: () => any;
        render(): any;
    }

}
declare module 'galio-framework' {
    import main = require('galio-framework/index');
    export = main;
}