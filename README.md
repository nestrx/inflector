# TWILIO
Inflector helper module for [NestJS framework](https://nestjs.com/).

## Installation

npm: 
```bash
npm i @nestrx/inflector
```
yan
```bash
yan add @nestrx/inflector
```

## Configure


app.module.ts
```ts
...
@Module({
	...
	imports: [
		...
		InflectorModule,
		...
	],
	...
})
...
```

## Usage

your.service.ts

```ts
...
@Injectable()
export class YourService {
  constructor(private injector: InflectorService) {
  }
...
```

