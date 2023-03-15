#!/bin/bash

if yarn lint; then
  echo "✅ - Build can proceed"
  exit 1;
else
  echo "🛑 - Build cancelled"
  exit 0;
fi
