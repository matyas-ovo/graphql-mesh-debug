# GraphQL Mesh Debug

`main` branch = not working

With any version above "@graphql-mesh/cli": "0.74.0", and "@graphql-mesh/graphql": "0.29.12" resulting 
in using "@graphql-mesh/runtime": "0.41.1" or above, calling any query will return null. 

`working` branch = working
Using any previous versions of the `cli` and `graphql` dependencies return the expected results.

### Commands
To start Apollo server sandbox run
```
yarn start
```
Then you can access it at [http://localhost:9000/graphql](http://localhost:9000/graphql).

Example query:

```
query Characters {
  characters {
    results {
      name
    }
  }
}
```

To run a test demonstrating the issue run
```
yarn test
```
