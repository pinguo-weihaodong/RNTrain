import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completedCount: 0
        }
    }
    // 如果没有计数的数; 重复点击tab可不更新
    /*shouldComponentUpdate(nextProps, nextState) {
        if (this.props.count != 0 && (this.props.filter == nextProps.filter)) {
            return false;
        }
        return true;
    }*/
    componentWillReceiveProps(nextProps) {
        const {count, activeCount} = nextProps;
        let completedCount = 0;
        if (count >= 0) {
            completedCount = count > activeCount ? (count - activeCount) : 0;
        }
        this.setState({completedCount});
    }

    // 发生在页面元素更新后，可用于重置一些状态
    ComponentDidUpdate() {
    }

    render() {
        const {filter, onClearComplete, onFilter, count = 0, activeCount = 0} = this.props;
        // const completedCount = count > activeCount ? (count - activeCount) : 0;
        return <View style={styles.container}>
            <View style={styles.filters}>
                <TouchableOpacity style={[styles.filter, filter === "ALL" && styles.selected]} onPress={() => onFilter("ALL")}>
                <Text>All(<Text style={{fontWeight: 'bold'}}>{count}</Text>)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filter, filter === "ACTIVE" && styles.selected]} onPress={() => onFilter("ACTIVE")}>
                <Text>Active(<Text style={{fontWeight: 'bold'}}>{activeCount}</Text>)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.filter, filter === "COMPLETED" && styles.selected]} onPress={() => onFilter("COMPLETED")}>
                <Text>Completed(<Text style={{fontWeight: 'bold'}}>{this.state.completedCount}</Text>)</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={onClearComplete} style={[styles.filter, styles.outline]}>
                <Text>清除</Text>
            </TouchableOpacity>
        </View>;
    }
}



const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    filters: {
        flexDirection: "row",
    },
    filter: {
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "transparent"
    },
    selected: {
        borderColor: "rgba(175, 47, 47, .2)"
    },
    outline: {
        borderColor: "rgba(137, 207, 240, .5)"
    }
});

export default Footer;