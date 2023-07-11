function compileTestCode() {
    throw new Error('test exception');
}

test('compiling test code throws an exception', () => {
    expect(() => compileTestCode()).toThrow('test exception');
})