import React from 'react';
import RustServerService from '../../api/RustServerService'

export default function TestComponent() {
    return (
        console.log(RustServerService.executeRustServerService())
    )
}
