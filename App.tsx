import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';
import './src/i18n/index';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}