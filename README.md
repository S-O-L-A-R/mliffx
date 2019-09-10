# mliffx

MobX Store for LINE Frontend Framework state

### Installation

```
npm i mliffx
```

### Usage

#### Initialize

In your entry file

```ts
import MLIFFXStore from 'mliffx'

mliffx.init()
```

#### MLIFFX Properties

##### isInit: boolean

It will be true if `LIFF` is initialized.

##### error: Error

It will be defined if `LIFF` is failed to initialize.

##### userProfile: DataStore< UserProfile >

It will return data store of user profile

##### accessToken: DataStore< string >

It will return data store of accessToken

#### DataStore

Example of calling value in DataStore

```ts
userProfile.value
```

##### Value Structure

* `value: T` Generic Type depend on data
* `fetched: boolean` will be true if store is fetched
* `loading: boolean` will be true if store is fetching
