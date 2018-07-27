module.exports = [{
    id: '1',
    label: "1",
    children: [{
        id: '1.1',
        label: "1-1",
        children: [
            {
                id: '1.1.1',
                label: "1-1-1"
            },
            {
                id: '1.1.2',
                label: "1-1-2"
            }
        ]
    }]
},{
    id: '2',
    label: "2",
    children: [{
        id: '2.1',
        label: "2-1",
        children: [
            {
                id: '2.1.1',
                label: "2-1-1",
            },
            {
                id: '2.1.2',
                label: "2-1-2",
            }
        ]
    },
    {
        id: '2.2',
        label: "2-2"
    }]
},{
    id: '3',
    label: "3",
    children: [{
        id:'3.1',
        label: "3-1"
    },{
        id: '3.1',
        label: "3-2",
        children: [{
            id: '3.2.1',
            label: "3-2-1"
        },{
            id: '3.2.2',
            label: "3-2-2"
        },{
            id: '3.2.3',
            label: "3-2-3",
            children:[
                {
                    id: '3.2.3.1',
                    label: '3-2-3-1'
                }
            ]
        }]
    }]
}]