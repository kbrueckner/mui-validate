# MUI Validate - Developer Guide

## Playground

The playground gives an opportunity to see the Validation framework in action. It is the base for the automatted integration tests.

Spawn the playground like

```
npm run dev
```

## Unit Tests

```
npm run test:unit
```

## Integration Tests

Prerequisit for the integration tests is a running playground under localhost:3000

```
npm run test:e2e
```

## Releasing

Run a release like

```
npm run release
```

All questions in the release process have to be answered with y or the release will be cancelled.
