import authService from '@/services/auth/auth.service';
import { NextRequest, NextResponse } from 'next/server';



export async function GET ( request : NextRequest){
    
    const {searchParams} = new URL(request.url)
    const key = searchParams.get('key') ?? ''
    const value = await authService.getRedisValue(key)
          
    return NextResponse.json({value:value})
  
     
  }