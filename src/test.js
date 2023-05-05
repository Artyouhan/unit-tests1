import showHealth from './health';

test('should healthly', () => {
    const retrieve = showHealth({name: 'маг', health: 90});
    expect(retrieve).toBe('healthly');
})

test('should wounded', () => {
    const retrieve = showHealth({name: 'маг', health: 30});
    expect(retrieve).toBe('wounded');
})

test('should critical', () => {
    const retrieve = showHealth({name: 'маг', health: 10});
    expect(retrieve).toBe('critical');
})