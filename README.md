# FlowToSchema

FlowToSchema is a fork of the original project [flow2schema](https://github.com/loyd/flow2schema) with a lot of modifications. 

## Example

```sh
$ cat example.js
```
```js
type A<T, K> = {
    t: T,
    k: K,
};

export type X = {
    a: A<string, boolean>,
    b: number,
};
```

```sh
$ flow2schema -t json-schema example.js
```

```json
{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "definitions": {
        "example::A::string::boolean": {
            "type": "object",
            "properties": {
                "t": {"type": "string"},
                "k": {"type": "boolean"}
            },
            "required": ["t", "k"]
        },
        "example::X": {
            "type": "object",
            "properties": {
                "a": {"$ref": "#/definitions/example::A::string::boolean"},
                "b": {"type": "number"}
            },
            "required": ["a", "b"]
        }
    }
}
```

## TODO
* Complete generics support.
* Errors and warnings.
* Complete commonjs support.
* Documentation.
* Stabilize API.
* Webpack plugin.
* Rollup plugin.
