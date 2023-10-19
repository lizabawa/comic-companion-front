interface Comics {
    id: number,
    title: string,
    description: string
    url: any
}

export const comics: Comics[] = [
    {
        id: 3,
        title: 'MecBros',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, mollitia. Neque quibusdam impedit corrupti perferendis! Voluptatum accusamus rerum adipisci ea excepturi inventore, vel magni porro blanditiis consectetur debitis fugit molestias!',
        url: ('assets/images/mec-bros.png')
    },
    {
        id: 2,
        title: 'Red Ranger',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, mollitia. Neque quibusdam impedit corrupti perferendis! Voluptatum accusamus rerum adipisci ea excepturi inventore, vel magni porro blanditiis consectetur debitis fugit molestias!',
        url: ('assets/images/red-ranger.png')
    },
    {
        id: 1,
        title: 'The Tale of Two Sisters',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, mollitia. Neque quibusdam impedit corrupti perferendis! Voluptatum accusamus rerum adipisci ea excepturi inventore, vel magni porro blanditiis consectetur debitis fugit molestias!',
        url: ('assets/images/two-sisters.png')
    }
]