import * as GridComponents from '@/components/grid';

export interface GridItem {
    i: string;
    component: React.ComponentType;
}

export const gridItems: GridItem[] = [
    { i: 'description', component: GridComponents.Description },
    { i: 'location', component: GridComponents.Location },
    { i: 'github', component: GridComponents.Github },
    { i: 'theme', component: GridComponents.Theme },
    { i: 'spotify', component: GridComponents.Spotify },
    { i: 'article', component: GridComponents.Article },
    { i: 'contact', component: GridComponents.Contact },
];
