# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0] - 2024-01-XX

### Added

- TypeScript definitions for improved developer experience
- Comprehensive test suite with 100% code coverage
- ESLint configuration with modern best practices
- Prettier for consistent code formatting
- CI/CD pipeline with GitHub Actions
- EditorConfig for consistent code style across editors
- .nvmrc for Node.js version consistency
- Improved documentation with better examples

### Changed

- **BREAKING**: Fixed critical bug where function returned Set instead of Array
- Rewrote shuffle algorithm using Fisher-Yates for true randomization
- Improved package.json with better metadata and scripts
- Enhanced README with detailed usage examples
- Updated to modern ES6+ syntax

### Fixed

- Critical bug where `Set` equality checking failed due to object reference comparison
- Function now correctly returns an array of cards
- Proper shuffling ensures all 52 unique cards in random order

## [2.0.31] - Previous Version

### Features

- Initial implementation with basic shuffle functionality

## [Previous Versions]

See git history for earlier changes.
