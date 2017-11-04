type X = string;

type Y = {
    x: X,
};

(function () {
    type X = number;

    type Y = {
        x: X,
    };

    type Z = string;

    function foo() {
        type X = boolean;

        type Y = {
            x: X,
            z: Z,
        };
    }

    class Test {
        static bar() {
            type X = number;

            type Y = {
                x: X,
                z: Z,
            };
        }

        baz() {
            type X = string;

            type Y = {
                x: X,
                z: Z,
            };
        }
    }
})();

// ###
[
    {
        type: 'string',
        name: 'X',
        namespace: 'scopes',
    },
    {
        type: 'record',
        name: 'Y',
        namespace: 'scopes',
        fields: [{name: 'x', type: 'X'}],
    },
    {
        type: 'double',
        name: 'X',
        namespace: 'scopes._1',
    },
    {
        type: 'record',
        name: 'Y',
        namespace: 'scopes._1',
        fields: [{name: 'x', type: 'X'}],
    },
    {
        type: 'string',
        name: 'Z',
        namespace: 'scopes._1',
    },
    {
        type: 'record',
        name: 'Test',
        namespace: 'scopes._1',
        fields: [],
    },
    {
        type: 'boolean',
        name: 'X',
        namespace: 'scopes._2',
    },
    {
        type: 'record',
        name: 'Y',
        namespace: 'scopes._2',
        fields: [
            {name: 'x', type: 'X'},
            {name: 'z', type: 'scopes._1.Z'},
        ],
    },
    {
        type: 'double',
        name: 'X',
        namespace: 'scopes._3',
    },
    {
        type: 'record',
        name: 'Y',
        namespace: 'scopes._3',
        fields: [
            {name: 'x', type: 'X'},
            {name: 'z', type: 'scopes._1.Z'},
        ],
    },
    {
        type: 'string',
        name: 'X',
        namespace: 'scopes._4',
    },
    {
        type: 'record',
        name: 'Y',
        namespace: 'scopes._4',
        fields: [
            {name: 'x', type: 'X'},
            {name: 'z', type: 'scopes._1.Z'},
        ],
    },
]
