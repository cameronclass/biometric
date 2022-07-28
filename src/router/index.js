import Vue from 'vue'
import Router from "vue-router";

import Static from '@/pages/static/Static';
import Technology from "@/pages/technology/index";
import TechnologyHistory from "@/pages/technology/history";
import StaticList from "@/pages/static/StaticList";
import Wallet from "@/pages/Wallet";
import Document from "@/pages/Document";
import Help from "@/pages/Help";
import Settings from "@/pages/Settings";
import FaceToFace from "@/pages/documentation/face-to-face";

// component

Vue.use( Router )

const routes = [
  { path: '', redirect: { name: 'login' } },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/auth/login'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/auth/register')
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('@/auth/password')
  },
  {
    path: '/dashboard',
    component: () => import('@/components/layout/Body'),
    children: [
      {
        path: 'static',
        name: 'static',
        component: Static,
        meta: {
          title: 'Default Dashboard',
        }
      },
      {
        path: 'static-list',
        name: 'static-list',
        component: StaticList,
        meta: {
          title: 'Default Dashboard',
        }
      },
      {
        path: 'technology',
        name: 'technology',
        component: Technology,
        meta: {
          title: 'Technology',
        }
      },
      {
        path: 'history-flow',
        name: 'history-flow',
        component: TechnologyHistory,
        meta: {
          title: 'Default Dashboard',
        }
      },
      {
        path: 'wallet',
        name: 'wallet',
        component: Wallet,
        meta: {
          title: 'Default Dashboard',
        }
      },
      {
        path: 'document',
        name: 'document',
        component: Document,
        meta: {
          title: 'Default Dashboard',
        },
      },
      {
        path: 'help',
        name: 'help',
        component: Help,
        meta: {
          title: 'Default Dashboard',
        }
      },
      {
        path: 'settings',
        name: 'settings',
        component: Settings,
        meta: {
          title: 'Default Dashboard',
        }
      },
      {
        path: 'face-to-face',
        name: 'face-to-face',
        component: FaceToFace,
      }
    ]
  } ];

const router = new Router( {
  routes,
  base: '/',
  mode: 'history',
  linkActiveClass: "active",
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
} );

export default router
